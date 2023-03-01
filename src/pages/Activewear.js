import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Activewear(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [activewear, setActivewear] = useState([]);
  
    let getData = async () => {
      let allActivewear = await getClothes("womens gym");
      console.log(allActivewear);
  
      let activewearComponents = allActivewear.products.map(item => {
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
  
      setActivewear(activewearComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="activewear">
          <button className="back" onClick={goBack}>back</button>
            <h1>Activewear</h1>
            <button onClick={getData}>Call Activewear API</button>
            
            
            <div className="imageCards"> 
                {activewear} 
            </div>
        </div>
    )
}