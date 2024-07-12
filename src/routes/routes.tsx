import MainLayout from "@/components/layouts/MainLayout";
import Cart from "@/pages/Cart/Cart";
import Dashboard from "@/pages/Dashboard/Dashboard";

import Home from "@/pages/Home/Home";
import Payment from "@/pages/Payment";
import ProductCategory from "@/pages/ProductCategory/ProductCategory";
import ProductDetails from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import ProductsPage from "@/pages/ProductsPage/ProductsPage";
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
        path: "/products/:id",
        element: <ProductDetails />,
      },
      {
        path: "/products",
        element: <ProductDetails />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products",
        element: <Payment />,
      },
      {
        path: "/products",
        element: <ProductCategory />,
      },
      {
        path: "/productPage",
        element: <ProductsPage />,
      },
    ],
  },
]);

export default router;
