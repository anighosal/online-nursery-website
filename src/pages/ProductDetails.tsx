import CartButton from "@/components/CartButton/CartButton";
import StarRating from "@/components/ui/StarRating";
import { useGetProductByIdQuery } from "@/redux/api/baseApi";
import { addToCart } from "@/redux/reducers/cartReducer";
import { IProduct } from "@/types/types";

import React from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

interface ProductDetailsProps {
  product?: IProduct;
}

const ProductDetails: React.FC<ProductDetailsProps> = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { data: product } = useGetProductByIdQuery(id!, {
    skip: !id,
  });
  console.log(id);

  //   limit: 10,
  //   sort: "price",
  //   order: "desc",
  // });
  console.log(product);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
    }
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
