import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addCart } from "../store/action";
import { getClothes } from "../services/asos-api";
import './ProductDetails.css'
import { addToCart } from "../store/CartSlice";
import { getClothesDetails } from "../services/asosapiDetails";

export default function ProductDetails(){
    let location = useLocation()
    let {id} = useParams()

    let navigate = useNavigate()      
    function goBack(){
        navigate(-1)
    }
///////////////////localStorage///////////////////
     const [cartStorage, setCartStorage] = useState([]);
      const cart = useSelector(state => state.cart)
      function handleClick(product){
        dispatch(addToCart(product))
  
      localStorage.setItem('product', JSON.stringify([product, ...cart]));
        console.log(product)
      }
      //////////////////////////////////////////////////////
      
      const dispatch = useDispatch()
      
      let [product, setProduct] = useState("");
      let getData = async () => {
        let productArray =[] 
        
        let productData = await getClothesDetails(id);
        productArray.push(productData)
        console.log(productArray);
        
        let productComponents = productArray.map((product) => {
            let imgUrl = "https://" + product.media.images[0].url;
            return (
              <div key={product.id} className="productInfo">
                <img src={imgUrl} alt="" />
                <div className="productText">
                  <h1> {product.name} </h1>
                  <h2>Brand: {product.brand.name}</h2>
                  <h3>Price: {product.price.current.text}</h3>
                  <h3>Color: {product.variants[0].colour}</h3>
                  {/* <p>Description: {product.description}</p> */}
                  <button onClick={() => handleClick(product)}>ADD TO CART</button>    
                  {/* <button onClick={() => {localStorage.setItem(product);
}}>Add to Local Storage</button> */}
                </div>   
             </div>  
            );
          });
        
      setProduct(productComponents);
      console.log(productComponents)
    };
        //  useEffect(() => {
        //    getData();
        // }, []);

      return(
         <div>
           <div >
              {  (location.pathname === `/products/${id}`) && (
              <div className="buttons">
                <button onClick={goBack}>Back</button>
                <button onClick={getData}>Call Product API</button>
              </div>
              )}      
            </div>
            <div className="clothingProduct">{product}</div> 

           

        </div>
    )
} 


           ////////////////////////////////////////////////

{/* <img src={props.imgsrc} alt="" />
                <div className="itemInfo">
                     <h1> {props.name} </h1>
                     <h2>Brand: {props.brand}</h2>
                     <h3>Price: {props.price}</h3>
                     <h3>Color: {props.color}</h3>
                     <button>ADD TO CART</button>
                 </div>   */}

           ////////////////////////////////////////////////
            {/* {item.map(item => (
                <div>
                <img src={item.imgsrc} alt="" />
                <div className="itemInfo">
                     <h1> {item.name} </h1>
                     <h2>Brand: {item.brand}</h2>
                     <h3>Price: {item.price}</h3>
                     <h3>Color: {item.color}</h3>
                     <button>ADD TO CART</button>
                 </div>  
                 </div>
            ))}*/}



            ///////////////////////////////////////////////////////

        //          return(
        //             <div>
        //                <div className="clothingItem">
        //                    {item.map(item => (
        //                        <div>
        //                            <img src={item.imgsrc} alt="" />
        //                            <div className="itemInfo">
        //                                <h1> {item.name} </h1>
        //                                <h2>Brand: {item.brand}</h2>
        //                                <h3>Price: {item.price}</h3>
        //                                <h3>Color: {item.color}</h3>
        //                                <button>ADD TO CART</button>
        //                            </div>  
        //                       </div>
        //                    ))}
        //                    </div>
        //                    <div>
        //                        <button onClick={goBack}>Back</button>
        //                        <button onClick={getData}>Call Item API</button>
        //                        </div>
        //                    </div>
        //        )
        //    } 