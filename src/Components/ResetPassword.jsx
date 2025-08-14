import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/ReactToastify.css";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { id, token } = useParams();

  const navigate = useNavigate();
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`http://localhost:5000/api/auth/reset-password/${id}/${token}`, {
        password,
      })
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">
            Reset Password Account
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="max-w-sm mx-auto mt-10">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter password"
                />
                <button
                  type="button"
                  onClick={togglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
