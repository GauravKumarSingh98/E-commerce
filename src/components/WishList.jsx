import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Remove item from wishlist
  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">My Wishlist</h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {wishlist.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow">
              <img
                src={product.image}
                alt={product.title}
                className="w-20 mx-auto"
              />
              <Link to={`/${product.id}`}>
                <p className="font-semibold mt-2">{product.title}</p>
              </Link>
              <p className="text-green-600 font-bold">${product.price}</p>

              <button
                onClick={() => removeFromWishlist(product.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mt-2 w-full"
              >
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishList;
