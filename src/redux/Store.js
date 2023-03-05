import cartReducer from "./CartSlice";

import { configureStore } from "@reduxjs/toolkit";
import wishlistReducer from "./WishlistSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer
  },
});


