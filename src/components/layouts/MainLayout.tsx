import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import { ICartItem } from "@/types/types";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const cartItems: ICartItem[] = [
    { id: 1, name: "Plant", quantity: 1, price: 9.99 },
  ];
  return (
    <div>
      <Navbar cartItems={cartItems}></Navbar>
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
