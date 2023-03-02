// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import { addCart, delCart } from "../redux/cartSlice";


// const Cart = () => {
//   const state = useSelector((state) => state.handleCart);
//   const dispatch = useDispatch();

//   const handleAdd = (item) => {
//     dispatch(addCart(item));
//   };
//   const handleDel = (item) => {
//     dispatch(delCart(item));
//   };

//   const emptyCart = () => {
//     return (
//       <div className="emptyCart">
//             <h1>Your Cart is Empty</h1>
//       </div>
//     );
//   };
//   const cartItems = (item) => {
//     return (
//       <>
//             <div className="fullCart">
//               <div className="cartImg">
//                 <img
//                   src={item.imgsrc}
//                   alt={item.name}
//                   height="200px"
//                   width="180px"
//                 />
//               </div>
//               <div className="cartPrices">
//                 <h3>{item.title}</h3>
//                 <p className="prices">
//                   {item.qty} X ${item.price} = $
//                   {item.qty * item.price}
//                 </p>
//                 <button
//                   className="delButton"
//                   onClick={() => handleDel(item)}
//                 >-</button>
//                 <button
//                   className="addButton"
//                   onClick={() => handleAdd(item)}
//                 >+</button>
//               </div>
//             </div>
//       </>
//     );
//   };
//   const buttons = () => {
//     return (
//       <>
//         <div className="checkoutParent">
//             <Link
//               to="/checkout"
//               className="checkoutButton"
//             >
//               Checkout
//             </Link>
//         </div>
//       </>
//     );
//   };

//   return (
//     <div>
//         <p>empty cart</p>
//       {state.length === 0 && emptyCart()}
//       {state.length !== 0 && state.map(cartItems)}
//       {state.length !== 0 && buttons()}
//     </div>
//   );
// };

// export default Cart;
