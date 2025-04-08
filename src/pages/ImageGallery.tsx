import Container from "@/components/ui/Container";

const photos = [
  { src: "https://i.ibb.co/HpdN1tQ/istockphoto-177320705-612x612.jpg" },
  { src: "https://i.ibb.co/TqfqpHq/images-3.jpg" },
  { src: "https://i.ibb.co/HzYmjsm/images-2.jpg" },
  { src: "https://i.ibb.co/nMZfhCS/snake-plant.jpg" },
  { src: "https://i.ibb.co/7jWRwLf/713b6h-Lg-IDL-AC-UF1000-1000-QL80.jpg" },
  { src: "https://i.ibb.co/mScFsjf/images-1.jpg" },
  { src: "https://i.ibb.co/tMp00rs/images.jpg" },
  { src: "https://i.ibb.co/MR4zq4C/apples-2788599-1280.jpg" },
  { src: "https://i.ibb.co/ky8MkVj/oranges-1117628-640.jpg" },
  { src: "https://i.ibb.co/Nsv0bh3/istockphoto-157193938-612x612.jpg" },
  { src: "https://i.ibb.co/thzWzpS/b9f74faae7f2c1b3865e007116cfb8fb.jpg" },
  { src: "https://i.ibb.co/thzWzpS/b9f74faae7f2c1b3865e007116cfb8fb.jpg" },
];

const ImageGallery = () => {
  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-4">Image Gallery</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="w-full h-[250px]">
            <img
              src={photo.src}
              alt={`Image ${index}`}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ImageGallery;
