// src/components/SearchBar.tsx
import { useSearchProductsAndCategoriesQuery } from "@/redux/api/baseApi";
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, error, isLoading } = useSearchProductsAndCategoriesQuery(
    searchQuery,
    {
      skip: !searchQuery, // Skip query if searchQuery is empty
    }
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search for products or categories..."
        className="w-full p-2 border rounded"
      />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error loading results</p>}

      {/* Display search results */}
      {data && (
        <div className="absolute w-full bg-white border mt-2 p-4 shadow-lg">
          <h3>Products:</h3>
          <ul>
            {data.products.length === 0 && <li>No products found</li>}
            {data.products.map((product: any) => (
              <li key={product._id}>{product.title}</li>
            ))}
          </ul>

          <h3>Categories:</h3>
          <ul>
            {data.categories.length === 0 && <li>No categories found</li>}
            {data.categories.map((category: any) => (
              <li key={category._id}>{category.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
