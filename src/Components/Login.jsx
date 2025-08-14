import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {  toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const Login = ({setToken}) => {
  const [email, setEmail] = useState("test05@gmail.com");
  const [password, setPassword] = useState("12345");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {  email, password };
    await axios
      .post("http://localhost:5000/api/auth/login", payload)
      .then((res) => {
        
        toast.success(res.data.message);
        setToken(res.data.token)
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
      setEmail("")
      setPassword("")
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
          
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
          <div className="mt-4 text-center">
            <Link
              to="/forgotPassword"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Forgot Password
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link
              to="/register"
              className="text-sm text-blue-600 hover:text-blue-500"
            >
              Don't  have an account? Register
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default Login;
