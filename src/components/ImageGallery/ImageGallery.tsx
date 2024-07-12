import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  useFetchCategoriesQuery,
  useFetchProductsQuery,
} from "@/redux/api/baseApi";

const ImageGallery = () => {
  const { data: categories } = useFetchCategoriesQuery();
  const { data: products } = useFetchProductsQuery();

  // Combine all image URLs from categories and products
  const allImages: string[] = [];

  if (categories) {
    categories.forEach((category) => {
      if (category.image) {
        allImages.push(category.image);
      }
      if (category.products) {
        category.products.forEach((product) => {
          if (product.image) {
            allImages.push(product.image);
          }
        });
      }
    });
  }

  if (products) {
    products.forEach((product) => {
      if (product.image) {
        allImages.push(product.image);
      }
    });
  }

  return (
    <Carousel>
      <CarouselContent className="-ml-2 md:-ml-4">
        <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
        <CarouselItem className="pl-2 md:pl-4">...</CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ImageGallery;
