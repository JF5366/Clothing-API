import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Accessories(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [accessories, setAccessories] = useState([]);
  
    let getData = async () => {
      let allAccessories = await getClothes("accessories");
      console.log(allAccessories);
  
      let accessoriesComponents = allAccessories.products.map(item => {
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
  
      setAccessories(accessoriesComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="accessories">
          <button className="back" onClick={goBack}>back</button>
            <h1>Accessories</h1>
            <button onClick={getData}>Call Accessories API</button>
            
            
            <div className="imageCards"> 
                {accessories} 
                </div>
        </div>
    )
}