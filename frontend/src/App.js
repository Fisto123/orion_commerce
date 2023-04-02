import "./App.css";
import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { Error } from "./components/Error";
import Search from "./pages/Search";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <Navbar />
        <Outlet />
      </div>
    );
  };
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
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/order",
          element: <Order />,
        },
        {
          path: "/error",
          element: <Error />,
        },
        {
          path: "/search",
          element: <Search />,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <ToastContainer />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </div>
  );
}

export default App;
