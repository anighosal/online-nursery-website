import { addToCart } from "@/redux/reducers/cartReducer";
import { IProduct } from "@/types/types";
import { ShoppingCartOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import StarRating from "../ui/StarRating";
import { Button } from "../ui/button";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

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
          <Link to={`/products/${product.id}`}>
            <Button className="bg-green-100 text-black px-4 py-2 rounded-md hover:bg-green-200 focus:outline-none">
              View Details
            </Button>
          </Link>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.title}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center mt-2">
          <StarRating rating={Number(product.rating)} />
          <span className="ml-2 text-gray-600">{product.rating}</span>
        </div>
        <span className="text-red-600">${product.price}</span>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2 space-y-2">
            <div
              onClick={handleAddToCart}
              className="flex items-center cursor-pointer"
            >
              <ShoppingCartOutlined
                style={{
                  fontSize: "24px",
                  color: "#047e29",
                }}
              />
              <span className="ml-2 text-gray-600">Add to Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
