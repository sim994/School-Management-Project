import axios from "axios";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "./Token";

export function Logout() {
  let check = async () => {
    let res = await axios.post(
      "http://localhost:3000/logout",
      {},
      {
        withCredentials: true,
      },
    );
    toast.success(res.data.msg);
    return res.data;
  };
  const { Islogout } = useContext(AuthContext);
  Islogout();
  const { isLoading, error, data } = useQuery({
    queryKey: ["check"],
    queryFn: check,
  });

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  if (error) {
    return <h1>{error.error}</h1>;
  }
  return (
    <div>
      <h1>{data.msg}</h1>
    </div>
  );
}
