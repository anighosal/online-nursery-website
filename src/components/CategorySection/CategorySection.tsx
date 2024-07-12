// src/components/CategorySection.tsx

import { useFetchCategoriesQuery } from "@/redux/api/baseApi";
import { ICategory } from "@/types/types";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const { data: categories } = useFetchCategoriesQuery();
  console.log(categories, "categories");

  // if (isLoading) return <div>Loading...</div>;

  // Ensure categories is an array before mapping
  // if (!Array.isArray(categories)) {
  //   return <div>No categories found.</div>;
  // }

  return (
    <div className="my-8 container mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Categories</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category: ICategory) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
