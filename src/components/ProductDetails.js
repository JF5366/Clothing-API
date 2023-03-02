import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { addCart } from "../store/action";
import { getClothes } from "../services/asos-api";
import './ProductDetails.css'

export default function ProductDetails(){
    let location = useLocation()
    let {id} = useParams()

    const dispatch = useDispatch();
    const addProduct = (product) => {
      dispatch(addCart(product));
      console.log(product)
    };

    let navigate = useNavigate()      
    function goBack(){
        navigate(-1)
    }

    let [product, setProduct] = useState([]);

    let getData = async () => {
        let productData = await getClothes(id);
        console.log(productData);
        
        let productComponents = productData.products.map((product) => {
            let imgUrl = "https://" + product.imageUrl;
            return (
              <div key={product.id} className="productInfo">
                <img src={imgUrl} alt="" />
                <div className="productText">
                  <h1> {product.name} </h1>
                  <h2>Brand: {product.brandName}</h2>
                  <h3>Price: {product.price.current.text}</h3>
                  <h3>Color: {product.colour}</h3>
                  <button onClick={() => addProduct(product)}>ADD TO CART</button>    
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