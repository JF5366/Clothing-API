import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
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
          <button className="back" onClick={goBack}>back</button>
            <h1>Swimwear</h1>
            <button onClick={getData}>Call Swim API</button>
            
            
            <div className="imageCards"> 
                {swim} 
                </div>
        </div>
    )
}