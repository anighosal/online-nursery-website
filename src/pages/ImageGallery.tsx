import Container from "@/components/ui/Container";
import Gallery from "react-photo-gallery";

const photos = [
  {
    src: "https://i.ibb.co/HpdN1tQ/istockphoto-177320705-612x612.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/TqfqpHq/images-3.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/HzYmjsm/images-2.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/nMZfhCS/snake-plant.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/7jWRwLf/713b6h-Lg-IDL-AC-UF1000-1000-QL80.jpg",
    width: 3,
    height: 1,
  },
  {
    src: "https://i.ibb.co/mScFsjf/images-1.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/tMp00rs/images.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/MR4zq4C/apples-2788599-1280.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/ky8MkVj/oranges-1117628-640.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/Nsv0bh3/istockphoto-157193938-612x612.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/ky8MkVj/oranges-1117628-640.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/thzWzpS/b9f74faae7f2c1b3865e007116cfb8fb.jpg",
    width: 1,
    height: 1,
  },
  {
    src: "https://i.ibb.co/HpdN1tQ/istockphoto-177320705-612x612.jpg",
    width: 1,
    height: 1,
  },
];

const ImageGallery = () => {
  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-4">Image Gallery</h2>
      <Gallery photos={photos} />
    </Container>
  );
};

export default ImageGallery;
