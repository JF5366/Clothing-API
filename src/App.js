import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import About from "./pages/About";
import { Navigate, Route, Routes } from "react-router-dom";
import Dresses from "./pages/shopping/Dresses";
import Pants from "./pages/shopping/Pants";
import Shoes from "./pages/shopping/Shoes";
import Tops from "./pages/shopping/Tops";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Swim from "./pages/shopping/Swim";
import Accessories from "./pages/shopping/Accessories";
import Activewear from "./pages/shopping/Activewear";
import Coats from "./pages/shopping/Coats";
import Lounge from "./pages/shopping/Lounge";
import Cart from "./pages/Cart";


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
        {/* <Route path="/cart" component={<Cart />} />  */}
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


