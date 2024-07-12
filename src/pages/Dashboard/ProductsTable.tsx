import { IProduct } from "@/types/types";

interface ProductsTableProps {
  products: IProduct[];
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border-gray-200 shadow-sm rounded-lg overflow-hidden">
        <thead className="bg-gray-100 border-b border-gray-200">
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
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {products.map((product: IProduct) => (
            <tr key={product.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-16 w-16 object-cover rounded"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{product.title}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                ${product.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {product.category}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="text-indigo-600 hover:text-indigo-900 mr-2">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-900">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
