import MainLayout from "@/components/layouts/MainLayout";
import Checkout from "@/pages/Checkout";

import Home from "@/pages/Home/Home";
import Payment from "@/pages/Payment";
import ProductCategory from "@/pages/ProductCategory/ProductCategory";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/productDetails",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <Checkout />,
      },
      {
        path: "/products",
        element: <Payment />,
      },
      {
        path: "/products",
        element: <ProductCategory />,
      },
    ],
  },
]);

export default router;
