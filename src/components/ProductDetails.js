import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getClothes } from "../services/asos-api";
import './ProductDetails.css'

export default function ProductDetails(){
    let location = useLocation()
    console.log(location)
    let {productId} = useParams() 
    let navigate = useNavigate()      
    function goBack(){
        navigate(-1)
    }

    let [item, setItem] = useState("");

    let getData = async () => {
        let itemData = await getClothes(productId);
        console.log(itemData);
        
        let itemComponents = itemData.products.map((item) => {
            let imgUrl = "https://" + item.imageUrl;
            return (
              <div key={item.id} className="itemInfo">
                <img src={imgUrl} alt="" />
                <h1> Name: {item.name} </h1>
                <h2>Brand: {item.brandName}</h2>
                <h3>Price: {item.price.current.text}</h3>
                <h3>Color: {item.colour}</h3>
                <button>ADD TO CART</button>       
             </div>  
            );
          });
        
      setItem(itemComponents);
      console.log(itemComponents)
    };
        //  useEffect(() => {
        //    getData();
        // }, []);

      return(
         <div>
            <div className="clothingItem">{item}</div> 

            <div >
              {  (location.pathname === '/products/204712578') && (
              <div>
              <button onClick={goBack}>Back</button>
              <button onClick={getData}>Call Item API</button>
              </div>
              )}
                
                    
            </div>

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