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
               set: action.payload.set,
               price: action.payload.price,
               img: action.payload.galleryImgs[0].imgUrl,
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
      ADD_TO_CART: (state, action) => {
         const { productName, base, border, type, line } = state.cartItem;
         const id = `${productName}${base}${border}${type}${line}`;

         return { ...state, cart: [...state.cart, { ...state.cartItem, id }] };
      },
      CLEAR_CART: (state) => {
         return { ...state, cart: [] };
      },
   },
});

export const {
   cart,
   cartItem,
   SET_CART_ITEM,
   ADD_ITEM_OPTION,
   ADD_TO_CART,
   CLEAR_CART,
} = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
