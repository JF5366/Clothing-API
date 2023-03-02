import cartReducer from "./cartSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});


// // import rootReducers from "./reducer";

// // export const store = createStore(rootReducers);