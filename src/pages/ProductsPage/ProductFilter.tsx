import React from "react";

interface ProductFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="flex space-x-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 ${
            selectedCategory === category
              ? "bg-green-600 text-white"
              : "bg-gray-200"
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProductFilter;
