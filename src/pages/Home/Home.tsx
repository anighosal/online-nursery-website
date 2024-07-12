import CategorySection from "@/components/CategorySection/CategorySection";
import HeroSection from "@/components/HeroSection/HeroSection";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import ProductDetails from "@/components/ProductDetails/ProductDetails";
import ProductList from "@/components/ProductList/ProductList";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <ProductList />
      <ProductDetails />
      <ImageGallery />
    </div>
  );
};

export default Home;
