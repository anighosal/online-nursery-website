import { useFetchCategoriesQuery } from "@/redux/api/baseApi";
import { ICategory } from "@/types/types";
import { useParams } from "react-router-dom";

import CartButton from "@/components/CartButton/CartButton";
import StarRating from "@/components/ui/StarRating";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { data: categories } = useFetchCategoriesQuery();

  const product = categories
    ?.flatMap((category: ICategory) => category.products)
    .find((p) => p.id == id);

  return (
    <div className="mx-auto p-4 border border-t-slate-400 mt-6 max-w-2xl">
      <div className="m-4">
        <div className="flex justify-between items-center">
          <div className="w-1/2 p-4 flex justify-between items-center">
            <img
              src={product?.image}
              alt={product?.title}
              className="h-22 object-contain"
            />
          </div>
          <div className="w-1/2 p-4">
            <h1 className="text-2xl font-bold mb-4">{product?.title}</h1>
            <p className="text-gray-600 mb-2">{product?.description}</p>
            <p className="text-gray-600 mb-2">{product?.category}</p>

            <div className="flex items-center mt-2">
              <StarRating rating={product?.rating} />
              <span className="ml-2 text-gray-600">{product?.rating}</span>
            </div>

            <p className="text-red-600 font-bold">
              ${product?.price.toFixed(2)}
            </p>
            <CartButton cartItems={[]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
