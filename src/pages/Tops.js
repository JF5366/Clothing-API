import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
//import { getEtsy } from "../services/etsy-api";


export default function Tops(){
    let {topz} = useParams() //not sure what this will be yet
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [top, setTop] = useState([]);
  
    let getData = async () => {
      let allTops = await getClothes("tops");
      console.log(allTops);
  
      let topComponents = allTops.products.map((item) => { //(item, index??) 
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div >
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
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
            <h1>Tops</h1>
            <button onClick={getData}>Call Tops API</button>
           <div className="imageCards"> {top}</div>

             
            
        </div>
    )
}