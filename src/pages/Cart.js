import { CartContext } from "../App";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCart, delCart } from "../store/action";


const Cart = () => {
    const state = useSelector((state) => state.handleCart);
    const dispatch = useDispatch();
  
    const handleAdd = (item) => {
      dispatch(addCart(item));
    };
    const handleDel = (item) => {
      dispatch(delCart(item));
    };
  
    const emptyCart = () => {
      return (
        <div className="emptyCart">
              <h1>Cart is Empty</h1>
        </div>
      );
    };
    const cartItems = (product) => {
      return (
        <>
              <div className="">
                <div className="">
                  <img
                    src={product.image}
                    alt={product.title}
                    height="200px"
                    width="180px"
                  />
                </div>
                <div className="">
                  <h3>{product.title}</h3>
                  <p className="">
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}
                  </p>
                  <button
                    className=""
                    onClick={() => handleDel(product)}
                  >
                   Delete Item
                  </button>
                  <button
                    className=""
                    onClick={() => handleAdd(product)}
                  >Add Item
                  </button>
                </div>
              </div>
        </>
      );
    };
    const buttons = () => {
      return (
        <>
          <div className="">
              <Link
                to="/cart"
                className="checkout"
              >
                Proceed to Checkout
              </Link>
          </div>
        </>
      );
    };
  
    return (
      <div>
        <p>Coming Soon....</p>
        <div>
            {state === 0 && emptyCart()}
            {/* {state !== 0 && state.map(cartItems)}
            {state !== 0 && buttons()} */}
        </div>
      </div>
    );
  };
  
  export default Cart;
  



// function Cart({ item }) {
//     const { dispatch } = useContext(TodosContext);
  
//     return (
//       <li style={{ listStyle: "none" }}>
//         <input
//           type="checkbox"
//           checked={item.completed}
//           onChange={() => dispatch({ type: "COMPLETE", payload: item.id })}
//         />
//         {item.text}
//         <button onClick={() => dispatch({ type: "DELETE", payload: item.id })}>
//           x
//         </button>
//       </li>
//     );
//   }
  
//   export default Cart;
  