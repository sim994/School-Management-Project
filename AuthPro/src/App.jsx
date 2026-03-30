import React from "react";
import { Layout } from "./Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./componets/Home";
import { Login } from "./componets/Login";
import { Logout } from "./componets/Logout";
import { Products } from "./Products";
import { Product } from "./Product";
import { Pokemon } from "./Pokemon";
import { Users } from "./Users";
import { About } from "./componets/About";
import { Datatable } from "./componets/Datatable";
import { StudentForm } from "./componets/StudentForm";
import { Signup } from "./componets/Signup";

import { AuthProvider } from "./componets/Token";
export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/aboutproject",
          element: <About />,
        },
        {
          path: "/studentform",
          element: <StudentForm />,
        },
        {
          path: "/datatable",
          element: <Datatable />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/logout",
          element: <Logout />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/products/:productId",
          element: <Product />,
        },
        {
          path: "/pokemon",
          element: <Pokemon />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "*",
          element: <h1>Page not found</h1>,
        },
      ],
    },
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}
