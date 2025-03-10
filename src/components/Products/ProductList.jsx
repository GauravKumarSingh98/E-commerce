import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  filterByCategory,
  searchProducts,
  sortProducts,
} from "../../Features/ProductSlice";
import { FaAngleRight, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "../../Features/cartSlice";

const ProductList = () => {
  const { products, categories, filteredProducts, searchQuery, sortType } =
    useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    dispatch(filterByCategory(category));
  };

  // Toggle Wishlist
  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) =>
      prevWishlist.some((item) => item.id === product.id)
        ? prevWishlist.filter((item) => item.id !== product.id) // Remove if exists
        : [...prevWishlist, product] // Add if not exists
    );
  };

  return (
    <>
      <div className="products_list grid grid-cols-1 md:grid-cols-4">
        {/* Sidebar */}
        <div
          className={`absolute md:static bg-white shadow-lg md:shadow-none p-4 w-64 md:w-full transition-transform ${
            sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          } md:flex md:flex-col space-y-3 border-r`}
        >
          <h2 className="font-bold text-lg mb-2">Product Categories</h2>
          <button
            className={`p-2 text-left ${
              selectedCategory === "" ? "font-bold underline" : ""
            }`}
            onClick={() => handleCategoryClick("")}
          >
            All Products
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`p-2 text-left flex justify-between ${
                selectedCategory === category ? "font-bold underline" : ""
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
              <FaAngleRight />
            </button>
          ))}
        </div>

        {/* Sidebar Toggle Button (for mobile) */}
        <button
          className="md:hidden fixed top-4 left-4 bg-gray-200 p-2 rounded"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          <FaBars />
        </button>

        {/* Main Content */}
        <div className="products_list col-span-3 p-4">
          <h2 className="text-xl font-semibold">Products</h2>

          {/* Search & Sorting */}
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => dispatch(searchProducts(e.target.value))}
              className="p-2 border rounded w-full md:w-1/3"
            />

            <select
              value={sortType}
              onChange={(e) => dispatch(sortProducts(e.target.value))}
              className="p-2 border rounded w-full md:w-auto focus:ring-2 focus:ring-blue-500 outline-none hover:bg-gray-100 transition"
            >
              <option value="none">Sort By</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
              <option value="nameAZ">Name: A-Z</option>
              <option value="nameZA">Name: Z-A</option>
            </select>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {(filteredProducts.length > 0 ? filteredProducts : products).map(
              (product) => (
                <div
                  key={product.id}
                  className="border p-4 rounded shadow flex flex-col justify-between h-full"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-20 mx-auto"
                  />
                  <Link to={`/${product.id}`}>
                    <p className="cursor-pointer font-semibold mt-2">
                      {product.title}
                    </p>
                  </Link>
                  <p className="text-green-600 font-bold">${product.price}</p>
                  <p className="text-gray-500">{product.category}</p>

                  <div className="mt-auto flex flex-col sm:flex-row gap-2 pt-4">
                    <button
                      onClick={() => dispatch(addToCart(product))}
                      className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 w-full"
                    >
                      Add to Cart
                    </button>
                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 w-full">
                      Buy
                    </button>

                    {/* Wishlist Button */}
                    <button
                      onClick={() => toggleWishlist(product)}
                      className={`p-2 rounded-md text-lg ${
                        wishlist.some((item) => item.id === product.id)
                          ? "text-red-500"
                          : "text-gray-400"
                      }`}
                    >
                      {wishlist.some((item) => item.id === product.id)
                        ? "❤️"
                        : "🤍"}
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
