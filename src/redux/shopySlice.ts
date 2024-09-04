import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cart: [],
  userInfo: null,
};

export const counterSlice = createSlice({
  name: "shopy",
  initialState,
  reducers: {
    addTocart: (state, action) => {
      // @ts-ignore

      const existProduct = state.cart.find(
         // @ts-ignore
        (item) => item.id === action.payload.id
      );

      if (existProduct) {
        // @ts-ignore
        existProduct.quentity += 1;
     
      } else {
        // @ts-ignore
        state.cart.push({ ...action.payload, quentity: 1 })
          
      }
    },

    incressQuantity:(state, action)=>{
      
      const existProduct = state.cart.find(
         // @ts-ignore
        (item) => item.id === action.payload
      );
      if(existProduct){
         // @ts-ignore
        existProduct.quentity +=1
      }


    },

    decressQuantity:(state, action) =>{
      const existProduct = state.cart.find(
         // @ts-ignore
        (item) => item.id === action.payload
      );
      // @ts-ignore
      if(existProduct.quentity > 1){
         // @ts-ignore
        existProduct.quentity -=1
        

      }

    },

    deleteCount:(state, action) =>{
      state.cart = state.cart.filter((item) =>item.id !== action.payload) 
    },

    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, addTocart, removeUser, incressQuantity, decressQuantity, deleteCount } = counterSlice.actions;

export default counterSlice.reducer;
