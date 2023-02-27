import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
//import { getEtsy } from "../services/etsy-api";


export default function Pants(){
    let {pant} = useParams() //not sure what this will be yet
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [pants, setPants] = useState([]);
  
    let getData = async () => {
      let allPants = await getClothes("pants");
      console.log(allPants);
  
      let pantComponents = allPants.products.map((item) => { //(item, index??) 
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div >
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
          </div>
        );
      });
  
      setPants(pantComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="pants">
          <button className="back" onClick={goBack}>back</button>
            <h1>Pants</h1>
            <button onClick={getData}>Call Pants API</button>
           <div className="imageCards"> {pants}</div>

             
            
        </div>
    )
}