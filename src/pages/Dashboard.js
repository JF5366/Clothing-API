import { useEffect, useState } from "react";
import { getClothes } from "../services/asos-api";
import ClothingTypeCard from "../components/ClothingTypeCard";
import Search from "../components/Search";
import SearchDisplay from "../components/SearchDisplay";
import { Link } from "react-router-dom";
import Dresses from "./Dresses";
import Pants from "./Pants";
import Shoes from "./Shoes";
import Tops from "./Tops";



export default function Main() {
    let [clothes, setClothes] = useState([]);
  
    let getData = async () => {
      let allClothing = await getClothes(); //getClothes from the asos api
      console.log(allClothing);
  
      let clothingComponents = allClothing.products.map((item) => { //(item, index??)
        let imgUrl = "https://" + item.imageUrl;
  
        return (
          <div className="clothing">
            <Link >
                <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
            </Link>
          </div>
        );
      });
  
      setClothes(clothingComponents);
    };
  
    useEffect(() => {
      getData("");
    }, []);
  
    return (
      <div className="mainPage">
        <div className="parent">
            <Link to="/dresses"><Dresses className="dressCard" clothes={clothes} />Dresses</Link>
            <Link to="/pants">
                <Pants className="pantsCard" clothes={clothes} />
                Pants
                </Link>
            <Link to="/shoes"><Shoes className="pantsCard" clothes={clothes} />Shoes</Link>
            <Link to="/tops"><Tops className="pantsCard" clothes={clothes} />Tops</Link>
            
            
            {/* {clothes} */}
        </div>
        <div className="search">
            <h1>Search for clothes</h1>
            <Search getClothes={getClothes} />
            <SearchDisplay clothes={clothes} />
         </div>
      </div>
    );
  }