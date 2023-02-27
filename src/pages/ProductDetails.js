import { useNavigate, useParams } from "react-router-dom";
import { getClothes } from "../services/asos-api";

export default function ProductDetails({clothingItem}){
    let {itemname} = useParams() 
    let navigate = useNavigate()      
    function goBack(){
        navigate(-1)
    }
    const thisClothingItem = clothingItem.product.filter(
        (thisClothingItem) => thisClothingItem.name === itemname
      );
console.log(thisClothingItem)

      return(
         <div>
            <div className="clothingItem">
                
                    <img src={thisClothingItem.imgsrc} alt="" />
                    <div className="itemInfo">
                         <h1>{thisClothingItem.name} </h1>
                         <h2>Brand: {thisClothingItem.brandName}</h2>
                         <h3>Price: {thisClothingItem.price.current.text}</h3>
                         <h3>Color: {thisClothingItem.colour}</h3>
                         <button>ADD TO CART</button>
                    </div>
                    
              </div>

             <button onClick={goBack}>Back</button>
             
        </div>
    )
}