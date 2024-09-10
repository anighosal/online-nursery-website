import { useGetCategoriesQuery } from "@/redux/api/baseApi";
import { ICategory } from "@/types/types";
import Container from "../ui/Container";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  const { data: categories } = useGetCategoriesQuery();
  console.log("categories", categories);

  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-4">Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories?.map((category: ICategory) => (
          <CategoryCard key={category.name} category={category} />
        ))}
      </div>
    </Container>
  );
};

export default CategorySection;
