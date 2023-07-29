import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    likedProducts: 0,
    totalAmount: 0,
    likedImages: [],
  },
  reducers: {
    incrementLike(state, action) {
      state.likedProducts += action.payload;
    },
    decrementLike(state, action) {
      state.likedProducts -= action.payload;
    },
    incrementTotal(state, action) {
      state.totalAmount += action.payload;
    },
    decrementTotal(state, action) {
      state.totalAmount -= action.payload;
    },
    addLikedImage(state, action) {
      state.likedImages.push(action.payload);
    },
    removeLikedImage(state, action) {
      state.likedImages = state.likedImages.filter(
        (image) => image !== action.payload
      );
    },
  },
});

export default countSlice.reducer;
export const {
  incrementLike,
  decrementLike,
  incrementTotal,
  decrementTotal,
  addLikedImage,
  removeLikedImage,
} = countSlice.actions;
