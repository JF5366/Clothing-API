import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Shoes(){
    let {shoez} = useParams() //not sure what this will be yet
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [shoe, setShoe] = useState([]);
  
    let getData = async () => {
      let allShoes = await getClothes("womens shoes");
      console.log(allShoes);
  
      let shoeComponents = allShoes.products.map((item) => { //(item, index??) 
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div >
            <Link to={`/products/${item.id}`}>
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
                <ProductDetails id={item.id}>Product details</ProductDetails>
                </Link>
          </div>
        );
      });
  
      setShoe(shoeComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="shoes">
              <div className="buttons">
                 <button className="back" onClick={goBack}>Back</button>
                  <button onClick={getData}>Call Tops API</button>
            </div>
            <h1>Shoes</h1>
           <div className="imageCards"> {shoe}</div>

             
            
        </div>
    )
}