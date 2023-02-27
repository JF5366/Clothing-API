import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
//import { getEtsy } from "../services/etsy-api";


export default function Shoes(){
    let {shoez} = useParams() //not sure what this will be yet
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [shoe, setShoe] = useState([]);
  
    let getData = async () => {
      let allShoes = await getClothes("shoes");
      console.log(allShoes);
  
      let shoeComponents = allShoes.products.map((item) => { //(item, index??) 
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div >
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
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
          <button className="back" onClick={goBack}>back</button>
            <h1>Shoes</h1>
            <button onClick={getData}>Call Shoes API</button>
           <div className="imageCards"> {shoe}</div>

             
            
        </div>
    )
}