/* eslint-disable @typescript-eslint/no-unused-vars */
import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";

import ProductList from "@/components/ProductList/ProductList";

import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";
import ImageGallery from "../ImageGallery";

const Home = () => {
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cartItems.length > 0) {
        event.preventDefault();
        event.returnValue = "";
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cartItems]);

  return (
    <div>
      <HeroSection />
      <CategorySection />

      <ProductList />

      <ImageGallery></ImageGallery>
    </div>
  );
};

export default Home;
