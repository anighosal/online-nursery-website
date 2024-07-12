import { useFetchProductsQuery } from "@/redux/api/baseApi";

import { useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Assuming productId is passed via route params

  const { data: products, isLoading } = useFetchProductsQuery();

  if (isLoading) return <div>Loading...</div>;

  // Find the product by productId
  const product = products?.find((p) => p.id === id);

  if (!product) return <div>Product not found.</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto"
          />
        </div>
        <div className="w-1/2 px-4">
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-gray-600 mb-2">{product.description}</p>
          <div className="flex items-center mt-2">
            <span className="text-gray-600">{product.category}</span>
            <span className="ml-4">Rating: {product.rating}</span>
          </div>
          <span className="text-red-600">${product.price.toFixed(2)}</span>
          <button
            onClick={() => {
              // Implement your add to cart functionality
              console.log("Add to cart clicked for:", product.title);
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
