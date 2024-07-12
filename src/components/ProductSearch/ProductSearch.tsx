import React, { useState } from "react";

interface ProductSearchProps {
  onSearch: (term: string) => void;
}

const ProductSearch: React.FC<ProductSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm.trim());
  };

  return (
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
  );
};

export default ProductSearch;
