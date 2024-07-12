// src/components/ProductSection.tsx

import { useFetchCategoriesQuery } from "@/redux/api/baseApi";
import { ICategory, IProduct } from "@/types/types";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { data: categories } = useFetchCategoriesQuery();

  return (
    <div className="my-8 mx-auto container">
      <h2 className="text-2xl font-bold text-center mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories?.flatMap((category: ICategory) =>
          category.products.map((product: IProduct) => (
            <div key={product.id} className="w-full">
              <div className="h-full">
                {" "}
                {/* Set a fixed height for each card */}
                <ProductCard product={product} onAddToCart={() => {}} />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
