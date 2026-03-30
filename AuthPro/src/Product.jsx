import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios, { Axios } from "axios";

export function Product() {
  let { productId } = useParams();

  let fetchData = async () => {
    let res = await axios.get(`https://dummyjson.com/products/${productId}`);
    return res.data;
  };

  const {
    isLoading,
    error,
    data: Product,
  } = useQuery({
    queryKey: ["Product", productId],
    queryFn: fetchData,
    staleTime: 10000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }
  return (
   <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
  <div key={Product.id} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden">

    {/* Image Section */}
    <div className="relative">
      <img
        src={Product.thumbnail}
        alt={Product.title}
        className="aspect-square w-full bg-gray-200 object-cover group-hover:opacity-90 transition duration-300 lg:h-72"
      />

      {/* Discount Badge */}
      <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
        -{Product.discountPercentage}%
      </span>
    </div>

    {/* Content */}
    <div className="p-4 flex flex-col gap-2">

      {/* Brand */}
      <p className="text-xs uppercase tracking-wide text-gray-400">
        {Product.brand}
      </p>

      {/* Title */}
      <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
          {Product.title}
      </h3>

      {/* Category */}
      <p className="text-xs text-gray-500">
        {Product.category}
      </p>

      {/* Rating */}
      <div className="flex items-center justify-between mt-1">
        <span className="text-yellow-500 text-sm font-medium">
          ⭐ {Product.rating}
        </span>

        <span
          className={`text-xs font-medium ${
            Product.stock > 0 ? "text-green-600" : "text-red-500"
          }`}
        >
          {Product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Price Section */}
      <div className="flex items-center gap-2 mt-2">
        <p className="text-base font-semibold text-gray-900">
          ${Product.price}
        </p>

        <p className="text-sm text-gray-400 line-through">
          ${(Product.price / (1 - Product.discountPercentage / 100)).toFixed(2)}
        </p>
      </div>

      {/* Button */}
      <button className="mt-3 w-full bg-blue-600 text-white py-2 rounded-xl 
                         hover:bg-blue-700 transition duration-200 
                         active:scale-95 shadow-sm">
        Add to Cart
      </button>

    </div>
  </div>
</div>

  );
}
