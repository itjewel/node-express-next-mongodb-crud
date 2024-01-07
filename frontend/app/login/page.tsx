'use client'
// components/LoginForm.js
import { useLoginMutation } from "@/redux/features/auth/apiSlice";

const LoginForm = () => {
  const [login, { isLoading }] = useLoginMutation();

  const handleLogin = async (credentials: { username: any; password: any; }) => {
    try {
      await login(credentials);
      // Handle successful login (actions dispatched by RTK Query)
    } catch (error) {
      // Handle login error
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = {
      username: e.target.username.value,
      password: e.target.password.value,
    };
    handleLogin(credentials);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" />
      </label>
      <label>
        Password:
        <input type="password" name="password" />
      </label>
      <button type="submit" disabled={isLoading}>
        {isLoading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
};

export default LoginForm;
