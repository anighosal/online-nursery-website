// src/components/ProductCard.tsx

import { IProduct } from "@/types/types";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useState } from "react";
import StarRating from "../ui/StarRating";

interface ProductCardProps {
  product: IProduct;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative bg-white border shadow-md overflow-hidden h-full">
      <div
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
        />
        <div
          className={`absolute inset-0 bg-cover bg-center filter blur-md transition-opacity duration-300 ${
            isHovered ? "opacity-80" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${product.image})` }}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={() => {} /* Implement your view details action here */}
            className="bg-green-100 text-black px-4 py-2 rounded-md hover:bg-green-200 focus:outline-none"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center mt-2">
          <StarRating rating={product.rating} />
          <span className="ml-2 text-gray-600">{product.rating}</span>
        </div>
        <span className="text-red-600">${product.price.toFixed(2)}</span>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 space-y-2">
            <div onClick={onAddToCart} className="absolute top-2 right-2">
              <ShoppingCartOutlined
                style={{
                  fontSize: "24px",
                  color: "#fff",
                  backgroundColor: "#047e29",
                  borderRadius: "50%",
                  padding: "8px",
                }}
              ></ShoppingCartOutlined>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
