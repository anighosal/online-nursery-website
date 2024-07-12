/* eslint-disable @typescript-eslint/no-explicit-any */
// src/app/types.ts

import { Key } from "react";

export interface IProduct {
  category: string;
  name: any;
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  rating: number;
  buttons: string[];
}

export interface ICategory {
  id: Key | null | undefined;
  name: string;
  image: string;
  products: IProduct[];
}
