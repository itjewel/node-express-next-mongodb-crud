'use client'
// components/LoginForm.js
import { useLoginMutation, useCheckAuthQuery  } from "@/redux/features/auth/apiSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setToken, setRoles, selectToken,selectRoles  } from "@/redux/features/auth/authSlice";
import { FormEvent } from "react";
const LoginForm = () => {
  const dispatch = useDispatch();
  const [login, { isLoading }] = useLoginMutation();
  const checkToken: string | undefined = useSelector(selectToken);
  const checkRoles: string | undefined = useSelector(selectRoles);
  
  const { data: authData, isError, isLoading: loadingData } = useCheckAuthQuery(checkToken);
  if(!loadingData && authData && !isError){
    // console.log
    console.log({authData, isError});
  }
    

  const handleLogin = async (credentials: { username: any; password: any; }) => {
    try {
      const response =  await login(credentials);
      if ('data' in response) {
        const { role, token } = response.data;
        dispatch(setRoles(role));
        dispatch(setToken(token));
      }
   
      // Handle successful login (actions dispatched by RTK Query)
    } catch (error) {
      // Handle login error
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = {
      username: e.target.username.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };
    handleLogin(credentials);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white shadow-md">
        <h2 className="text-3xl font-extrabold text-gray-800">Login</h2>
        <form className="mt-8 space-y-6" onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-600">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              required
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 p-3 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-gray-600">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="mt-1 p-3 w-full border rounded-md"
            >
              <option value="employee">Employee</option>
              <option value="supervisor">Supervisor</option>
              <option value="administrator">Administrator</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>

    
  );
};

export default LoginForm;
