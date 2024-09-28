import Container from "@/components/ui/Container";
import { useGetProductsByCategoryNameQuery } from "@/redux/api/baseApi";
import { IProduct } from "@/types/types";
import { useParams } from "react-router-dom";

const CategoryDetails = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const {
    data: products,
    isLoading,
    isError,
  } = useGetProductsByCategoryNameQuery(categoryName!, {
    skip: !categoryName,
  });

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <div>Error fetching products for category '{categoryName}'</div>;

  return (
    <Container>
      <h2 className="text-2xl font-bold text-center mb-4 mt-20 pt-10">
        {categoryName} Products
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Category
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {products?.map((product: IProduct) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-10 w-10 rounded-full"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">${product.price}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default CategoryDetails;
