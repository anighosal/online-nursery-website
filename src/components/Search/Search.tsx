// src/components/Search.tsx
import { searchProducts } from "@/redux/actions/productActions";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchProducts(searchTerm));
  };

  return (
    <form
      onSubmit={handleSearch}
      className="md:hidden flex items-center w-full"
    >
      <input
        type="text"
        placeholder="Search products..."
        className="border border-gray-300 rounded-l px-4 py-2 w-full"
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

export default Search;
