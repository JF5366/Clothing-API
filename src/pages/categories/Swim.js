import { getClothes } from "../../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Swim(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [swim, setSwim] = useState([]);
  
    let getData = async () => {
      let allSwim = await getClothes("swim");
      console.log(allSwim);
  
      let swimComponents = allSwim.products.map(item => {
        let imgUrl = "https://" + item.imageUrl;
        return (
          <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <ClothingTypeCard name={item.name} key={item.id} id={item.id} imgsrc={imgUrl} clothingItem={{item}}/>
                    <ProductDetails id={item.id}>Product details</ProductDetails>
            
                  </Link>

          </div>
          
        );
      });
  
      setSwim(swimComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="swim">
              <div className="buttons">
                  <button className="back" onClick={goBack}>Back</button>
                 <button onClick={getData}>Call Tops API</button>
             </div>
            <h1>Swimwear</h1>
            <div className="imageCards"> 
                {swim} 
                </div>
        </div>
    )
}