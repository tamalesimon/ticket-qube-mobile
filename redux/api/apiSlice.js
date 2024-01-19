import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_LOCAL, API_DEV } from '@env'
import { setCredentials, logOut } from '../auth/authSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: API_LOCAL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.accessToken
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
            headers.set('Content-Type', 'application/json')
            headers.set('Access-Control-Allow-Origin', 'https://localhost:8080',)
            headers.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept',)
            headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)
    console.log("result: ", result)
    if (result?.error?.originalStatus === 401) {
        console.log('sending refresh token')

        const refreshResult = await baseQuery('/users/signin', api, extraOptions)

        if (refreshResult?.data) {
            const user = api.getState().auth.user

            api.dispatch(setCredentials({ ...refreshResult.data, user }))
            result = await baseQuery(args, api, extraOptions)

        } else {
            api.dispatch(logout())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
