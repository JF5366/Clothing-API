import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Lounge(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [lounge, setLounge] = useState([]);
  
    let getData = async () => {
      let allLounge = await getClothes("womens lounge");
      console.log(allLounge);
  
      let loungeComponents = allLounge.products.map(item => {
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
  
      setLounge(loungeComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="lounge">
          <button className="back" onClick={goBack}>back</button>
            <h1>Lounge</h1>
            <button onClick={getData}>Call Lounge API</button>
            
            
            <div className="imageCards"> 
                {lounge} 
                </div>
        </div>
    )
}