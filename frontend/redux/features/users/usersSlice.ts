import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const usersSlice = createApi({
    reducerPath: 'usersSlice',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:5000/api/users'}),
    endpoints: (builder)=>({
        creatUser: builder.mutation({
            query: (data)=> {
                const userRoles = data.role;
                const { role, ...updatedroles } = data;
                let endpoint;
                switch (userRoles) {
                case 'administrator':
                    endpoint = '/register-administrator';
                    break;
                case 'supervisor':
                    endpoint = '/register-supervisor';
                    break;
                default:
                    endpoint = '/register-employee';
                    break;
                }
                return {
                    url: endpoint,
                    method: 'POST',
                    body: updatedroles,
                  };
                },
        }),
        getUser: builder.query({
            query: (query)=> `/getAllUser`
        })
    })
})

export const {useCreatUserMutation, useGetUserQuery} = usersSlice