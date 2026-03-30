import React, { useEffect, useState } from "react";
import axios, { Axios } from "axios";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useSearchParams } from "react-router-dom";

export function Products() {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 4,
    q: "",
    category: "",
  });

  const skip = parseInt(searchParams.get("skip")) || 0;
  const limit = parseInt(searchParams.get("limit")) || 4;
  const q = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      return axios.get("https://dummyjson.com/products/categories");
    },
    placeholderData: keepPreviousData,
  });

  const {
    isLoading,
    error,
    data: products,
  } = useQuery({
    queryKey: ["products", limit, skip, q, category],
    queryFn: async () => {
      let url = `https://dummyjson.com/products/search?limit=${limit}&skip=${skip}&q=${q}`;

      if (category) {
        url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
      }
      let res = await axios.get(url);
      return res.data.products;
    },
    placeholderData: keepPreviousData,
    staleTime: 20000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error.message}</h1>;
  }

  let move = (value) => {
    setSearchParams((prev) => {
      prev.set("skip", Math.max(skip + value, 0));
      return prev;
    });
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-between mb-10 bg-white p-6 rounded-2xl shadow-sm">
          {/* Search */}
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            onChange={(e) => {
              e.preventDefault();
              setSearchParams((prev) => {
                prev.set("q", e.target.value);
                prev.set("skip", 0);
                prev.delete("category");
                return prev;
              });
            }}
            className="w-full sm:w-1/2 px-4 py-3 rounded-xl border border-gray-200 
                   bg-gray-50 focus:bg-white
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition duration-200"
          />

          {/* Category Select */}
          <select
            name="category"
            onChange={(e) => {
              e.preventDefault();
              setSearchParams((prev) => {
                prev.set("category", e.target.value);
                prev.set("skip", 0);
                return prev;
              });
            }}
            className="w-full sm:w-1/4 px-4 py-3 rounded-xl border border-gray-200 
                   bg-gray-50 focus:bg-white
                   focus:outline-none focus:ring-2 
                   focus:ring-blue-500 focus:border-blue-500 
                   transition duration-200"
          >
            <option value="">Select category</option>

            {categories?.data?.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((products) => (
            <a
              href={`/products/${products.id}`}
              className="hover:text-blue-600 transition"
            >
              <div
                key={products.id}
                className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <div className="overflow-hidden">
                  <img
                    alt={products.title}
                    src={products.thumbnail}
                    className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                    {products.title}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500 capitalize">
                    {products.category}
                  </p>

                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-base font-bold text-gray-900">
                      ${products.price}
                    </p>

                    <span className="text-xs text-yellow-500 font-medium">
                      ⭐ {products.rating}
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            disabled={skip < limit}
            onClick={() => move(-limit)}
            className="px-6 py-2 rounded-xl bg-white border border-gray-300 
                   text-gray-700 hover:bg-gray-100 
                   transition duration-200 active:scale-95 shadow-sm"
          >
            Previous
          </button>

          <button
            disabled={products?.length < limit}
            onClick={() => move(limit)}
            className="px-10 py-2 rounded-xl bg-blue-600 text-white 
                   hover:bg-blue-700 transition duration-200 
                   active:scale-95 shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
