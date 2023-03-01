import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import About from "./pages/About";
import Nav from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dresses from "./pages/Dresses";
import Pants from "./pages/Pants";
import Shoes from "./pages/Shoes";
import Tops from "./pages/Tops";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Swim from "./pages/Swim";
import Accessories from "./pages/Accessories";
import Activewear from "./pages/Activewear";
import Coats from "./pages/Coats";
import Lounge from "./pages/Lounge";

export default function App() {
  // let [clothes, setClothes] = useState([]);
  
  
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route  path="/" element ={<Main />}/>
        <Route  path="/about" element ={<About />}/>
        <Route  path="/dresses" element ={<Dresses />} />
       
        <Route  path="/pants" element ={<Pants />}/>
        <Route  path="/shoes" element ={<Shoes />}/>
        <Route  path="/tops" element ={<Tops />}/> 
        <Route  path="/activewear" element ={<Activewear />}/>
        <Route  path="/swim" element ={<Swim />}/>
        <Route  path="/coats" element ={<Coats />}/>
        <Route  path="/lounge" element ={<Lounge />}/>
        <Route  path="/accessories" element ={<Accessories />}/>
        <Route path="/products/:productId" element ={<ProductDetails />}/>
       
        <Route path='*' element={<Navigate to="/" />} />

       

      </Routes>
      <Footer />
    </div>
  );
}



////////////////////////////////////////////////////////////////////////

 {/* <Route  path="/dresses" element ={<Dresses setClothes={setClothes}/>} />    .....to set clothes from data from dresses*/}
 {/* <Route path="/:productId" element ={<ProductDetails clothes={clothes} />}/> .....to send the updated clothes to the prod details component*/}
  {/* <Route path='*' element="Page does not exist" /> */}


