import React, { use } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axios, { Axios } from "axios";
import { useSearchParams } from "react-router-dom";

export function Users() {
  const [searchParams, setSearchParams] = useSearchParams({
    skip: 0,
    limit: 4,
    q: "",
  });

  const skip = parseInt(searchParams.get("skip")) || 0;
  const limit = parseInt(searchParams.get("limit")) || 4;
  const q = searchParams.get("q") || "";

  const {
      isLoading,
      isError,
      data: users,
    } = useQuery({
        queryKey: ["users", skip, limit, q],
        queryFn: async () => {
            const baseUrl = q
        ? `https://dummyjson.com/users/search?q=${q}&limit=${limit}&skip=${skip}`
        : `https://dummyjson.com/users?limit=${limit}&skip=${skip}`;

      const res = await axios.get(baseUrl);
      return res.data;
    },
    staleTime: 10000,
    placeholderData: keepPreviousData,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>Error: {isError.message}</h1>;
  }

  return (
    <div className="user-list">
      <header>
        <input
          type="search"
          name="search"
          placeholder="Search User"
          onChange={(e) => {
            const value = e.target.value;
        
            setSearchParams((prev) => {
              const params = new URLSearchParams(prev);
              params.set("q", value);
              params.set("skip", 0);
              return params;
            });
          }}
        />
      </header>
      <div className="users-container">
        {users.users.map((user) => {
          return (
            <div className="user-card" key={user.id}>
              <div className="user-header">
                <img
                  src={user.image}
                  alt={user.firstName}
                  className="user-image"
                />
                <h2 className="user-name">
                  {user.firstName} {user.lastName}
                </h2>
                <p className="user-id"> {user.email}</p>
              </div>

              <div className="user-info">
                <div className="info-row">
                  <span>Phone</span>
                  <p>{user.phone}</p>
                </div>

                <div className="info-row">
                  <span>Age</span>
                  <p>{user.age}</p>
                </div>

                <div className="info-row">
                  <span>Country</span>
                  <p>{user.address.country}</p>
                </div>

                <div className="info-row">
                  <span>Height</span>
                  <p>{user.height} cm</p>
                </div>

                <div className="info-row">
                  <span>Weight</span>
                  <p>{user.weight} kg</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="btns">
        <button
          disabled={skip < limit}
          onClick={() =>
            setSearchParams((prev) => {
              prev.set("skip", Math.max(skip - limit, 0));
              return prev;
            })
          }
        >
          Previous
        </button>
        <button
          disabled={skip + limit >= users.total }
          onClick={() =>
            setSearchParams((prev) => {
              prev.set("skip", skip + limit);
              return prev;
            })
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}
