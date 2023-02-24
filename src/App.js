import "./App.css";

import { useEffect, useState } from "react";
import { getClothes } from "./services/asos-api";
import Header from "./components/Header";
import ClothingTypeCard from "./components/ClothingTypeCard";
import Form from "./components/Form";

export default function App() {
  let [clothes, setClothes] = useState([]);

  let getData = async () => {
    let allClothing = await getClothes(); //getClothes from the asos api
    console.log(allClothing);

    let clothingComponents = allClothing.products.map((item) => {
      console.log(item);
      let imgUrl = "https://" + item.imageUrl;
      console.log(imgUrl);

      return (
        <div className="clothing">
          <ClothingTypeCard name={item.name} id={item.id} imgsrc={imgUrl} />
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
      <Header />
      <div className="parent">{clothes}</div>
      <div>
          <h1>Search for clothes</h1>
          <Form getClothes={getClothes} />
       </div>
    </div>
  );
}
