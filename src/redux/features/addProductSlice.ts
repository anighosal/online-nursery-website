import { IProduct } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IProduct[] = [];

const addProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IProduct>) => {
      state.push(action.payload);
    },
  },
});

export const { addProduct } = addProductSlice.actions;

export default addProductSlice.reducer;
