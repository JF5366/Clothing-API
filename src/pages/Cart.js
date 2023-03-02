import { CartContext } from "../App";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import ProductDetails from "../components/ProductDetails";
import './Cart.css'
import { addToCart, setCart } from "../store/CartSlice";


const Cart = () => {
  let navigate = useNavigate() 
  function goBack(){
    navigate(-1)
}
///////////////////localStorage
      // const [cartStorage, setCartStorage] = useState([]);

      // useEffect(() => {
      //   localStorage.setCartStorage('cartStorage', JSON.stringify(cartStorage));
      // }, [cartStorage]);
      // console.log(cartStorage)

      /////////////////////////////////////////
      // const [cartStorage, setCartStorage] = useState([]);

///////////////////////////////////////////////////////
    const state = useSelector((state) => state.cart);
    const dispatch = useDispatch();
  
    useEffect(() => {
      console.log('this is our cart')
      console.log(state)
    }, [])

    useEffect(() => {
      const product = JSON.parse(localStorage.getItem('product'));
      console.log(product)
      if (product) {
      //  setState(product); 
       dispatch(setCart(product))
      }
    }, []);

    return(
    state.map(cartItem => {
      let imgUrl = "https://" + cartItem.imageUrl;
      return (
        <div key={cartItem.id} className="cart">
              <div className="buttons">
                 <button className="back" onClick={goBack}>Back</button>
              </div>
            <Link to={`/products/${cartItem.id}`} className="cartLink">
              <ClothingTypeCard className="cartClothingCard" name={cartItem.name} key={cartItem.id} id={cartItem.id} imgsrc={imgUrl} clothingItem={{cartItem}}/>
              <ProductDetails className="cartClothingDetails" id={cartItem.id}>Product details</ProductDetails>
            </Link>


        </div>
       );
      })
  
    )

    // return (
    //   <div>
    //     <p>Coming Soon....</p>
    //     <div className="cart">
    //           <div className="buttons">
    //             <button className="back" onClick={goBack}>Back</button>
    //           </div>
    //         <h1>Cart</h1>
    //         <div className="imageCards"> 
    //             {cart}
    //         </div>
    //      </div>
    //     </div>
    // );
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
  
/////////////////////////////////////////

// <>



// <div className="">
//   <div className="">
//     <img
//       src={product.image}
//       alt={product.title}
//       height="200px"
//       width="180px"
//     />
//   </div>
//   <div className="">
//     <h3>{product.title}</h3>
//     <p className="">
//       {product.qty} X ${product.price} = $
//       {product.qty * product.price}
//     </p>
//     <button
//       className=""
//       // onClick={() => handleDel(product)}
//     >
//      Delete Item
//     </button>
//     <button
//       className=""
//       // onClick={() => handleAdd(product)}
//     >Add Item
//     </button>
//   </div>
// </div>
// </>
// );
// };
// const buttons = () => {
// return (
// <>
// <div className="">
// <Link
//   to="/cart"
//   className="checkout"
// >
//   Proceed to Checkout
// </Link>
// </div>
// </>
// );
// };


// return (

//   <div>
//   {/* {state === 0 && emptyCart()} */}
//   {/* {state !== 0 && state.map(cartItems)}
//   {state !== 0 && buttons()} */}
// </div>
// )