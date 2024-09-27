import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { ProductType } from "../../type";

interface InitialState {
  cart: ProductType[];
  userInfo: any;
}

const initialState: InitialState = {
  cart: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "shopy",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existProduct) {
        existProduct.quantity! += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },

    incressQuantity: (state, action) => {
      const existProduct = state.cart.find(
        (item) => item.id === action.payload
      );
      if (existProduct) {
        existProduct.quantity! += 1;
      }
    },

    decressQuantity: (state, action) => {
      const existProduct = state.cart.find(
        // @ts-ignore
        (item) => item.id === action.payload
      );
      // @ts-ignore
      if (existProduct.quantity > 1) {
        // @ts-ignore
        existProduct.quantity -= 1;
      }
    },

    deleteCount: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addUser,
  addTocart,
  removeUser,
  incressQuantity,
  decressQuantity,
  deleteCount,
} = counterSlice.actions;

export default counterSlice.reducer;
