import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
//import { getEtsy } from "../services/etsy-api";


export default function Dresses(){
    let {dress} = useParams() //not sure what this will be yet
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [dresses, setDresses] = useState([]);
  
    let getData = async () => {
      let allDresses = await getClothes("dresses");
      console.log(allDresses);
  
      let dressComponents = allDresses.products.map((item) => { //(item, index??) //allDresses.products.map for asos
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div className="dresses">
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
          </div>
        );
      });
  
      setDresses(dressComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="dresses">
            <h1>Dresses</h1>
            <button onClick={getData}>Call Dresses API</button>
           <div className="imageCards"> {dresses}</div>

             <button onClick={goBack}>Back</button>
            
        </div>
    )
}