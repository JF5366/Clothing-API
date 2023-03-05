import { CartContext } from "../App";
import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import ProductDetails from "../components/ProductDetails";
import './Wishlist.css'
import { addToCart, setCart, clearCart, deleteFromCart } from "../redux/CartSlice";
import { setWishlist, clearWishlist, deleteFromWishlist } from "../redux/WishlistSlice";


const Wishlist = () => {
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
    const state = useSelector((state) => state.wishlist);
    const dispatch = useDispatch();

  
    
    useEffect(() => {
      // console.log('this is our wishlist')
      // console.log(state)
    }, [])

    useEffect(() => {
      const product = JSON.parse(localStorage.getItem('wishlist'));
      console.log(product)
      if (product) {
      //  setState(product); 
       dispatch(setWishlist(product))
      }
    }, []);
  
    const wishlistHeader = () => {
      return (
        <>
            <div className="wishlistHeader">
                <h1>Wishlist Items</h1>
            </div>
        </>
      );
    };


   const emptyWishlist = () => {
    return (
      <div className="emptyWishlist">
            <h1>Wishlist is Empty</h1>
      </div>
    );
  };
  const wishlistItems = (product) => {
    
    return (
      <>
            <div className="wishlistData">
              <div className="deleteItem">
                <button onClick={() => {dispatch(deleteFromWishlist())}}>Delete Item</button>
              </div>
              <div className="wishlistImg">
                <img
                  src={"https://" + product.media.images[0].url}
                  alt={product.name}
                />
              </div>
               <div className="wishlistInfo">
                <h3>{product.name}</h3>
                </div>
                {/* <div className="wishlistQuantity">
                  <p>Quantity: {product.quantity}</p>
                  {console.log(product.quantity)}
                </div> */}
                <div className="wishlistPrice">
                  <p>
                    {/* {product.qty} X ${product.price} = $
                    {product.qty * product.price} */}
                    {product.price.current.text} 
                  </p>
                {/* <button
                  className="delBtn"
                  onClick={() => handleDel(product)}
                >-</button>
                <button
                  className="addBtn"
                  onClick={() => handleAdd(product)}
                >+</button>  */}
              </div>
              
            </div>
      </>
    );
  };
  const checkout = () => {

    const wishlistTotal = state.reduce((a, c) => a + c.price.current.value, 0);
   


    return (
      <>
          <div className="checkoutLink">
              {/* <div className="wishlistTotal">
                Total: ${wishlistTotal}
              </div> */}
            {/* <Link
              to="/checkout"
              className="checkoutBtn"
            ><button>Proceed to Checkout</button></Link> */}
            <button onClick={() => {dispatch(clearWishlist())}}>Empty Wishlist</button>
          </div>
      </>
    );
  };


  return (
    <div className="wishlist">
      {wishlistHeader()}
      {state.length === 0 && emptyWishlist()}
      {state.length !== 0 && state.map(wishlistItems)}
      {state.length !== 0 && checkout()}
    </div>
  );
};



  
  export default Wishlist;

