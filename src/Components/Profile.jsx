import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Profile = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    role: "",
    createdAt:"",
  });
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `https://passwordresetflow-zu6g.onrender.com/api/auth/getUser/${id}`
        );
        setUser(response.data.data); // Assuming your API returns { data: user }
        setLoading(false);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch user data");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [id]);

  if (loading) {
    return <div className="text-center py-8">Loading profile...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          User Profile
        </h2>
        
        <div className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
              <p className="text-gray-800">{user.userName}</p>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
              <p className="text-gray-800">{user.email}</p>
            </div>
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
              <p className="text-gray-800">{user.role}</p>
            </div>
          </div>

          {/* Password (optional - only if your API returns it) */}
          {user.password && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50 flex justify-between items-center">
                  <p className="text-gray-800">
                    {showPassword ? user.password : "••••••••"}
                  </p>
                  <button
                    onClick={() => setShowPassword(!showPassword)}
                    className="ml-2 text-sm text-blue-600 hover:text-blue-800 focus:outline-none"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>
            </div>

            
          )}
          {/* createdAt*/}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CreatedAt
            </label>
            <div className="mt-1 p-2 border border-gray-300 rounded-md bg-gray-50">
              <p className="text-gray-800">{user.createdAt}</p>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <button
            onClick={() => window.history.back()}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Back
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Profile;