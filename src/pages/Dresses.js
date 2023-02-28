import { getClothes } from "../services/asos-api";
import { Link, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
//import { getEtsy } from "../services/etsy-api";


export default function Dresses(){
 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    
    let [dresses, setDresses] = useState([]);
  
    let getData = async () => {
      let allDresses = await getClothes("dresses");
      console.log(allDresses);
  
      let dressComponents = allDresses.products.map((item) => {
        let imgUrl = "https://" + item.imageUrl;
        return (
          <div >
                <Link to={`/dresses/${item.name}`}>
                  
                  <ClothingTypeCard name={item.name} key={item.name} id={item.id} imgsrc={imgUrl} clothingItem={item}/>
                </Link>
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
          <button className="back" onClick={goBack}>back</button>
            <h1>Dresses</h1>
            <button onClick={getData}>Call Dresses API</button>
            
            
            <div className="imageCards"> 
                {/* <Link to={`/pages/dresses/${item.name}`}> {dresses}</Link> */}
                {dresses}
                </div>

             
            
        </div>
    )
}