import { useSearchProductsAndCategoriesQuery } from "@/redux/api/baseApi";
import React, { useEffect, useState } from "react";

interface ProductSearchProps {
  onSearch: (term: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(searchTerm);

  const { data, error, isLoading } = useSearchProductsAndCategoriesQuery(
    debouncedTerm,
    {
      skip: !debouncedTerm.trim(),
    }
  );

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      onSearch(debouncedTerm);
    }
  }, [debouncedTerm, onSearch]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm);
    }
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center mt-4"
      >
        <input
          type="text"
          placeholder="Search products..."
          className="border border-gray-300 rounded-l px-4 py-2 w-full sm:max-w-xs"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-r"
        >
          Search
        </button>
      </form>

      {isLoading && <div>Loading...</div>}
      {error && <div>Error loading products</div>}

      {data && (
        <div className="mt-4">
          <h3 className="text-lg font-bold">Search Results:</h3>
          <ul>
            {data.products.length === 0 && <li>No products found</li>}
            {data.products.map((product: any) => (
              <li key={product._id}>{product.title}</li>
            ))}

            {data.categories && data.categories.length > 0 && (
              <>
                <h4 className="text-lg font-bold">Categories:</h4>
                {data.categories.map((category: any) => (
                  <li key={category._id}>{category.name}</li>
                ))}
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
