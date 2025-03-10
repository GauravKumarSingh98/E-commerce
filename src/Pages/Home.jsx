import React, { useContext, useEffect, useState } from "react";
import ProductLoader from "../components/Products/ProductLoader";
import ProductList from "../components/Products/ProductList";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { user, logout } = useContext(AuthContext);
  const [showWelcome, setShowWelcome] = useState(false);

  // Show welcome message for 4 seconds when user logs in
  useEffect(() => {
    if (user) {
      setShowWelcome(true);
      const timer = setTimeout(() => {
        setShowWelcome(false);
      }, 4000);

      return () => clearTimeout(timer); // Cleanup function to avoid memory leaks
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center text-center p-4 md:p-8">
      {/* Show welcome message for 4 seconds */}
      {showWelcome && (
        <div className="mb-4 bg-green-100 text-green-800 p-3 rounded-md shadow-md">
          <p className="text-lg font-semibold">Welcome, {user?.name || "User"}! You are logged in.</p>
        </div>
      )}

      {/* Logout button (Always visible when user is logged in) */}
      {user && (
        <button
          onClick={logout}
          className="bg-red-500 text-white px-6 py-2 rounded-md hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}

      <div className="w-full mt-6">
        <ProductLoader />
        <ProductList />
      </div>
    </div>
  );
};

export default Home;
