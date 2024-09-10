/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IProduct {
  _id: string | undefined;
  id: string;

  title: string;
  description: string;
  price: string;
  category: string | undefined;
  image: string;
  rating: string;
  quantity: string;
}

export interface ICategory {
  name: string;
  image: string;
  products: IProduct[] | undefined;
}

export interface ICartItem {
  _id: string | undefined;
  product: string;
  title: string;
  description: string;
  category: string;
  image: string;
  rating: string;

  name: string;
  quantity: string;
  price: string;
}

export interface IOrder {
  name: string;
  phone: string;
  address: string;
  cartItems: {
    _id: string;
    title: string;
    description: string;
    category: string;
    price: string;
    quantity: string;
    image: string;
    rating: string;
  }[];
  status?: string;
  createdAt?: Date;
}
