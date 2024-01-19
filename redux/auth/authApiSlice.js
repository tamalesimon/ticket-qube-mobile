import { apiSlice } from "../api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query: body => ({
                url: '/users/signup',
                method: 'POST',
                body
            }),
        }),
        signin: builder.mutation({
            query: credentials => ({
                url: "/users/login",
                method: "POST",
                body: { ...credentials }
            }),
        }),
        forgotPassword: builder.mutation({
            query: (body) => ({
                url: "/users/forgot-password",
                method: "POST",
                body,
            }),
        }),
        resetPassword: builder.mutation({
            query: (body) => ({
                url: "/users/reset-password",
                method: "POST",
                body,
            }),
        }),
        verifyUser: builder.mutation({
            query: (body) => ({
                url: "/users/verify",
                method: "POST",
                body,
            }),
        }),
        createAccount: builder.mutation({
            query: (body) => ({
                url: "/users/create-account",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useSignupMutation,
    useSigninMutation,
    useForgotPasswordMutation,
    useResetPasswordMutation,
    useVerifyUserMutation,
    useCreateAccountMutation
} = authApiSlice;