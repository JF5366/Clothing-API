// import { createContext, useReducer } from "react";



// export const cartAction = {
//     ADD_TO_CART: "ADD_TO_CART",
//     REMOVE_FROM_CART: "REMOVE_FROM_CART"
//   };


// export const CartContext = createContext();
// function cartMethods(cart, action) {
//   switch (action.type) {
//     case cartAction.ADD_TO_CART:
//       return [...cart, action.product];
//     case cartAction.REMOVE_FROM_CART:
//       return cart.filter((product) => product._id !== action.id);
//     default:
//       return cart;
//   }
// }

// export function CartProvider({ children }) {
//   const [cart, cartDispatch] = useReducer(cartMethods, []);
//   const value = { cart, cartDispatch };
//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// }
