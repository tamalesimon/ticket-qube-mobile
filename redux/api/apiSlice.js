import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_LOCAL, API_DEV } from '@env'
import { setCredentials, logOut } from '../Auth/rtkqAuthSlice'

const baseQuery = fetchBaseQuery({
    baseUrl: API_LOCAL,
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().rtkauth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions)

    if (result?.error?.originalStatus === 401) {
        console.log('Sending refresh for token')

        const refreshResult = await baseQuery('/users/signin', api, extraOptions)
        console.log("Refresh results: ", refreshResult)

        if (refreshResult?.data) {
            const email = api.getState().rtkauth.email
            const password = api.getState().rtkauth.password

            api.dispatch(setCredentials({ ...refreshResult.data.token, email, password }))

            result = await baseQuery(args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    } return result
}

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: builder => ({})
})
