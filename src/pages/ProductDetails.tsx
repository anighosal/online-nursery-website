import CartButton from "@/components/CartButton/CartButton";
import StarRating from "@/components/ui/StarRating";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/reducers/cartReducer";

import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { data: product } = useGetProductByIdQuery(id);
  console.log(id);

  // const { data, error, isLoading } = useGetProductsQuery({
  //   page: 1,
  //   limit: 10,
  //   sort: "price",
  //   order: "desc",
  // });
  console.log(product);

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error loading products.</div>;

  // const products: IProduct[] = data?.products || [];

  // const product = products.find((p: IProduct) => p.id === id);

  // if (!product) return <div>Product not found</div>;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="border border-t-slate-400 max-w-xl p-6 container mt-20 pt-10">
      <div className="flex justify-between">
        <div>
          <img
            src={product?.image}
            alt={product?.title}
            className="h-64 object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 space-y-3 ml-3">
          <h1 className="text-2xl font-bold">{product?.title}</h1>
          <p className="text-gray-600">{product?.description}</p>
          <p className="text-gray-600">{product?.category}</p>
          <div className="flex mt-2">
            <StarRating rating={Number(product?.rating)} />
            <span className="ml-2 text-gray-600">{product?.rating}</span>
          </div>
          <p className="text-red-600 font-bold">${product?.price}</p>
          <div className="flex gap-x-2">
            <div onClick={handleAddToCart} className="cursor-pointer">
              <CartButton cartItems={[]} />
            </div>
            <Link to="/checkout">
              <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
