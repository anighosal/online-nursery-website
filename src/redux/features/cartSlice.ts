import { ICartItem, IProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  items: ICartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const existingItem = state.items.find((item) => item._id === product._id);

      if (existingItem) {
        existingItem.quantity = (
          parseInt(existingItem.quantity) + 1
        ).toString();
      } else {
        state.items.push({
          id: product.id ?? "",
          name: product.title,
          title: product.title,
          description: product.description,
          category: product.category ?? "",
          image: product.image,
          rating: product.rating,
          price: product.price,
          quantity: "1",
          product: "",
          _id: undefined,
        });
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item._id !== action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
