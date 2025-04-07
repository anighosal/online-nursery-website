/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

const SearchResults: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || ""; // Get search query from URL
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      if (!query) return;
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:5001/productSearchByName/${query}`
        );
        if (!response.ok) throw new Error("Network response was not ok");

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
      setLoading(false);
    };

    fetchProducts();
  }, [query]);

  return (
    <div className="container mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-6">
        Search Results for "{query}"
      </h2>

      {loading && <p className="text-center text-gray-500">Loading...</p>}

      {!loading && products.length === 0 && (
        <p className="text-center text-gray-500">No products found.</p>
      )}

      <div className="flex justify-center">
        <div className="">
          {products.map((product) => (
            <div
              key={product.id}
              className="border rounded-lg p-5 shadow-lg hover:shadow-xl transition bg-white"
            >
              {/* Product Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-md mb-4"
              />

              {/* Product Details */}
              <h2 className="text-black font-bold text-center">
                {product.title}
              </h2>

              <p className="text-gray-700 text-sm text-center">
                {product.description}
              </p>

              {/* Price & Rating */}
              <div className="container mx-auto px-10">
                <div className="flex justify-between items-center mt-3">
                  <span className="text-green-600 font-bold text-lg">
                    ${product.price}
                  </span>
                  <span className="text-yellow-500 text-lg">
                    ⭐ {product.rating || "N/A"}
                  </span>
                </div>
              </div>

              {/* View Details Button */}
              <div className="flex justify-center mt-4">
                <Link to={`/products/${product._id}`}>
                  <Button className="bg-green-100 text-black px-4 py-2 rounded-md hover:bg-green-200 focus:outline-none">
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
