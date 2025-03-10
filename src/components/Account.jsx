import React, { useState } from "react";
import { useNavigate } from "react-router";

const Account = () => {
  const navigate = useNavigate();

  // Initial State
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  // State for form fields
  const [formData, setFormData] = useState(initialFormData);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", formData);
    alert("Profile Updated Successfully!");
  };

  // Reset form data when cancel is clicked
  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-xl font-semibold mb-6">
        Welcome! <span className="text-red-500">Gaurav Singh</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar - Account Navigation */}
        <div className="w-full md:w-1/4 p-5 bg-gray-100 rounded-md">
          <h1 className="font-bold text-lg">Manage My Account</h1>
          <div className="flex flex-col space-y-2 pt-3">
            <p className="text-sm text-red-500">My Profile</p>
            <p className="text-sm">Address Book</p>
            <p className="text-sm">My Payment Options</p>
          </div>

          <h1 className="font-bold text-lg pt-5">My Orders</h1>
          <div className="flex flex-col space-y-2 pt-3">
            <p className="text-sm">My Returns</p>
            <p className="text-sm">My Cancellations</p>
          </div>

          <h1
            onClick={() => navigate("/wishlist")}
            className="font-bold text-lg pt-5 cursor-pointer text-red-500"
          >
            My Wishlist
          </h1>
        </div>

        {/* Profile Edit Form */}
        <div className="w-full md:w-3/4 p-6 shadow-lg rounded-md">
          <h1 className="text-2xl font-semibold text-red-500 mb-4">
            Edit Your Profile
          </h1>
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your First Name"
                  className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your Last Name"
                  className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Email & Address Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label>Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your Email ID"
                  className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label>Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your Address"
                  className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Password Fields */}
            <div className="flex flex-col space-y-3">
              <label>Password Changes</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                placeholder="Current Password"
                className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
              />
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="New Password"
                className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
              />
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm New Password"
                className="py-2 px-3 rounded-md bg-gray-200 focus:outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-4">
              <button
                type="button"
                onClick={handleCancel} // Reset form fields
                className="bg-gray-300 px-5 py-2 rounded-md hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-red-500 px-5 py-2 text-white rounded-md hover:bg-red-600 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Account;
