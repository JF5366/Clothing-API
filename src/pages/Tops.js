import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Tops(){
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [top, setTop] = useState([]);
  
    let getData = async () => {
      let allTops = await getClothes("womens tops");
      console.log(allTops);
  
      let topComponents = allTops.products.map((item) => { //(item, index??) 
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div >
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} className="topCard"/>
                <ProductDetails id={item.id}>Product details</ProductDetails>
          </div>
        );
      });
  
      setTop(topComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="tops">
          <button className="back" onClick={goBack}>back</button>
            <h1 className="topsHeader">Tops</h1>
            <button onClick={getData}>Call Tops API</button>
           <div className="imageCards"> {top}</div>

             
            
        </div>
    )
}