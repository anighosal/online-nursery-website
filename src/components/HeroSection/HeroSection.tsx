import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HeroSection = () => {
  return (
    <div className="h-full w-full max-w-7xl mx-auto container  bg-slate-20 mt-20 pt-10">
      <Carousel className="">
        <CarouselContent className="h-full">
          <CarouselItem className="flex flex-col md:flex-row items-center h-full w-full">
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-4xl font-bold">
                Welcome to Nature's Nest
              </h2>
              <p className="mt-2">
                Discover a variety of plants and flowers to beautify your home
                and garden. Nature's Nest offers the best selection for all your
                nursery needs.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={image1}
                alt="Beautiful flowers at Nature's Nest"
                className="w-full h-[400px] object-contain"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col md:flex-row items-center h-full w-full">
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-4xl font-bold">Quality Plants</h2>
              <p className="mt-2">
                We provide high-quality plants that are perfect for both indoor
                and outdoor settings. Our plants are carefully nurtured to
                ensure they thrive in your environment.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={image2}
                alt="High-quality plants at Nature's Nest"
                className="w-full h-[400px] object-contain"
              />
            </div>
          </CarouselItem>
          <CarouselItem className="flex flex-col md:flex-row items-center h-full w-full">
            <div className="w-full md:w-1/2 p-4 flex flex-col justify-center h-full">
              <h2 className="text-2xl md:text-4xl font-bold">Expert Advice</h2>
              <p className="mt-2">
                Our knowledgeable staff is here to help you with all your
                gardening questions. From plant care tips to landscaping ideas,
                we are here to support your gardening journey.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-full">
              <img
                src={image3}
                alt="Expert advice at Nature's Nest"
                className="w-full h-[400px] object-contain"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default HeroSection;
