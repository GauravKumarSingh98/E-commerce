import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { CiHeart, CiShoppingCart } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 onClick={() => navigate("/")} className="text-2xl font-bold cursor-pointer">
            ShopStore
          </h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {["Home", "Contact", "About", "Signup"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className={({ isActive }) => `hover:text-blue-600 ${isActive ? "text-blue-600 font-semibold" : ""}`}
              >
                {item}
              </NavLink>
            ))}
          </div>

          {/* Search Bar & Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <input
                type="text"
                className="w-48 lg:w-60 h-10 bg-gray-100 px-4 text-sm rounded-full"
                placeholder="What are you looking for?"
              />
              <IoSearchOutline className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer" />
            </div>
            <CiHeart onClick={() => navigate("/wishlist")} className="text-2xl cursor-pointer" />
            <CiShoppingCart onClick={() => navigate("/cart")} className="text-2xl cursor-pointer" />
            <VscAccount
              onClick={() => navigate("/MyAccount")}
              className="text-2xl bg-red-500 text-white p-1 rounded-full cursor-pointer"
            />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-3xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 py-4">
            {["Home", "Contact", "About", "Signup"].map((item) => (
              <NavLink
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-lg font-medium hover:text-blue-600"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <div className="flex flex-col items-center space-y-4">
              <input
                type="text"
                className="w-3/4 h-10 bg-gray-100 px-4 text-sm rounded-full"
                placeholder="What are you looking for?"
              />
              <div className="flex space-x-6">
                <CiHeart onClick={() => navigate("/wishlist")} className="text-2xl cursor-pointer" />
                <CiShoppingCart onClick={() => navigate("/cart")} className="text-2xl cursor-pointer" />
                <VscAccount
                  onClick={() => navigate("/MyAccount")}
                  className="text-2xl bg-red-500 text-white p-1 rounded-full cursor-pointer"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
