import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
   name: "product",
   initialState: { product: [], gallery: [] },

   reducers: {
      GET_PRODUCT: (state, action) => {
         return {
            ...state,
            product: action.payload,
            gallery: action.payload.galleryImgs,
         };
      },
      CHANGE_GALLERY_IMAGE: (state, action) => {
         const { category, imgUrl } = action.payload;
         console.log(category, imgUrl);
         const newGallery = state.gallery.map((i) =>
            i.name === category ? { ...i, imgUrl: imgUrl } : i
         );

         return {
            ...state,
            gallery: newGallery,
         };
      },
   },
});

export const { product, gallery, GET_PRODUCT, CHANGE_GALLERY_IMAGE } =
   productSlice.actions;

export const selectProduct = (state) => state.product;

export default productSlice.reducer;
