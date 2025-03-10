import React, { useState, useContext } from "react";
import signup_image from "../assets/signup1.png";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = signup(name, email, password);
    if (success) {
      navigate("/login"); // ✅ Redirect after successful signup
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
        <h1 className="text-2xl font-bold text-center">Create an Account</h1>
        <p className="text-sm text-center text-gray-600">Enter your details below</p>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="py-2 px-3 border rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

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
            Create Account
          </button>

          <button
            type="button"
            className="border py-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
          >
            Sign up with Google
          </button>
        </form>

        <div className="text-center">
          <p className="text-sm">
            Already have an account?{" "}
            <span
              className="text-red-500 cursor-pointer underline"
              onClick={() => navigate("/login")}
            >
              Log in
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
