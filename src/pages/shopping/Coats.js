import { getClothes } from "../../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Coats(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [coats, setCoats] = useState([]);
  
    let getData = async () => {
      let allCoats = await getClothes("womens coats");
      console.log(allCoats);
  
      let coatsComponents = allCoats.products.map(item => {
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
  
      setCoats(coatsComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="coats">
              <div className="buttons">
                <button className="back" onClick={goBack}>Back</button>
                <button onClick={getData}>Call Tops API</button>
             </div>
            <h1>Coats</h1>
             <div className="imageCards"> 
                {coats} 
                </div>
        </div>
    )
}