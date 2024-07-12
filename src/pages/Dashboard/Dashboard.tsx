import { useFetchCategoriesQuery } from "@/redux/api/baseApi";
import { ICategory, IProduct } from "@/types/types";
import ProductsTable from "./ProductsTable";

const Dashboard = () => {
  const { data: categories } = useFetchCategoriesQuery();

  // Flatten the products from all categories
  const products: IProduct[] =
    categories?.flatMap((category: ICategory) =>
      category.products.map((product: IProduct) => ({
        ...product,
        category: category.name,
      }))
    ) || [];

  return (
    <div className="my-8 mx-auto container">
      <h2 className="text-2xl font-bold text-center mb-4">Products List</h2>
      <ProductsTable products={products} />
    </div>
  );
};

export default Dashboard;
