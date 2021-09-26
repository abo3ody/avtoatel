import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
   name: "cart",
   initialState: { cart: [], cartItem: {} },

   reducers: {
      SET_CART_ITEM: (state, action) => {
         let arr = { productName: action.payload.title };
         const categories = action.payload.options.map((category) => {
            return {
               ...arr,
               [category.content[0].category]: category.content[0].Text,
            };
         });

         for (let i = 0; i < categories.length; i++) {
            arr = { ...arr, ...categories[i] };
         }
         return {
            ...state,
            cartItem: {
               ...arr,
               type: action.payload.type ? action.payload.type : null,
            },
         };
      },
      ADD_ITEM_OPTION: (state, action) => {
         return {
            ...state,
            cartItem: {
               ...state.cartItem,
               [action.payload.category]: action.payload.text,
            },
         };
      },
   },
});

export const { cart, cartItem, SET_CART_ITEM, ADD_ITEM_OPTION } =
   cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
