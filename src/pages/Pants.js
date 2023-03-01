import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";



export default function Pants(){
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [pants, setPants] = useState([]);
  
    let getData = async () => {
      let allPants = await getClothes("womens pants");
      console.log(allPants);
  
      let pantsComponents = allPants.products.map(item => {
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
  
      setPants(pantsComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="pants">
          <button className="back" onClick={goBack}>back</button>
            <h1>Pants</h1>
            <button onClick={getData}>Call Pants API</button>

            <div className="imageCards"> 
                {pants} 
                   </div>

        </div>
    )
}