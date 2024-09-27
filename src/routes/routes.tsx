import MainLayout from "@/components/layouts/MainLayout";
import Admin from "@/pages/Admin";
import ALLProducts from "@/pages/AllProducts";
import Cart from "@/pages/Cart/Cart";
import CategoryDetails from "@/pages/CategoryDetails";
import Checkout from "@/pages/Checkout";

import Home from "@/pages/Home/Home";
import Payment from "@/pages/Payment";
import ProductCategory from "@/pages/ProductCategory/ProductCategory";
import ProductDetails from "@/pages/ProductDetails";

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
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <ProductDetails />,
      },
      {
        path: "/all-products",
        element: <ALLProducts></ALLProducts>,
      },
      {
        path: "/categories",
        element: <CategoryDetails></CategoryDetails>,
      },
      {
        path: "/categories/:categoryName",
        element: <CategoryDetails></CategoryDetails>,
      },

      {
        path: "/admin",
        element: <Admin />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },

      {
        path: "/payment",
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
