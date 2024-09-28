import { ICartItem } from "@/types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface OrderState {
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: OrderState = {
  status: "idle",
  error: null,
};

export const createOrder = createAsyncThunk(
  "order/create",
  async (
    {
      name,
      phone,
      address,
      cartItems,
    }: { name: string; phone: string; address: string; cartItems: ICartItem[] },
    thunkAPI
  ) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, address, cartItems }),
      });

      if (!response.ok) {
        throw new Error("Failed to create order");
      }

      return await response.json();
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createOrder.fulfilled, (state) => {
        state.status = "succeeded";
        state.error = null;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;
