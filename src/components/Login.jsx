import React, { useContext, useState } from "react";
import signup_image from "../assets/signup1.png";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);
    if (success) {
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
      {/* Left Image Section */}
      <div className="hidden md:block w-1/2">
        <img src={signup_image} alt="Signup" className="max-w-full h-auto" />
      </div>

      {/* Right Form Section */}
      <div className="w-full md:w-1/3 flex flex-col space-y-5 p-6 shadow-lg rounded-md bg-white">
        <h1 className="text-2xl font-bold text-center">Login to Your Account</h1>
        <p className="text-sm text-center text-gray-600">Enter your details below</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email or Phone Number"
            className="py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
          
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-red-500 cursor-pointer hover:underline">
          Forgotten Password?
        </p>
      </div>
    </div>
  );
};

export default Login;
