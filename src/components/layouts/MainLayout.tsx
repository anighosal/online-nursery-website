import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";
import { ICartItem } from "@/types/types";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const cartItems: ICartItem[] = [
    { id: 1, name: "Plant", quantity: 1, price: 9.99 },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItems={cartItems} />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
