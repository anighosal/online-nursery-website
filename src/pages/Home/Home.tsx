/* eslint-disable @typescript-eslint/no-unused-vars */
import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageGallery from "@/components/ImageGallery/ImageGallery";

import ProductList from "@/components/ProductList/ProductList";
import ProductSearch from "@/components/ProductSearch/ProductSearch";
import ProductDetails from "../ProductDetails";

const Home = () => {
  const handleSearch = (term: string) => {
    console.log("Searching for:", term);
  };
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductSearch onSearch={handleSearch} />

      <ProductList />
      <ProductDetails />
      <ImageGallery />
    </div>
  );
};

export default Home;
