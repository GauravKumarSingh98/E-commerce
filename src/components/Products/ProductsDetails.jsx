import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { FaStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { FiMinus, FiPlus } from "react-icons/fi";

const ProductDetails = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      {product ? (
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-5xl">
          {/* Product Image */}
          <div className="w-full md:w-1/2 flex justify-center p-6">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-w-xs md:max-w-sm object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h2>

            {/* Star Ratings */}
            <div className="flex items-center gap-1 text-yellow-500">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} />
              ))}
              <span className="text-gray-500 text-sm">(150 Reviews)</span>
            </div>

            {/* Availability & Price */}
            <p className="text-green-500 font-semibold mt-2">In Stock</p>
            <p className="text-2xl font-bold">${product.price}</p>
            <p className="text-gray-600 text-sm mt-2">{product.description}</p>

            {/* Quantity and Buy Options */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <div className="flex items-center border border-gray-400 rounded-md overflow-hidden">
                <button className="p-2 bg-gray-200 hover:bg-gray-300">
                  <FiMinus />
                </button>
                <span className="px-4 py-2 text-lg">1</span>
                <button className="p-2 bg-gray-200 hover:bg-gray-300">
                  <FiPlus />
                </button>
              </div>

              <button className="px-6 py-2 bg-red-500 text-white rounded-md w-full md:w-auto">
                Buy Now
              </button>

              <button className="p-2 border rounded-md text-gray-600">
                <AiOutlineHeart size={24} />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-xl font-semibold text-center">Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
