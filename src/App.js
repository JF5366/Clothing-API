import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from './pages/Main';
import About from "./pages/About";
import Nav from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import Dresses from "./pages/categories/Dresses";
import Pants from "./pages/categories/Pants";
import Shoes from "./pages/categories/Shoes";
import Tops from "./pages/categories/Tops";
import Navbar from "./components/Navbar";
import ProductDetails from "./components/ProductDetails";
import { useState } from "react";
import Swim from "./pages/categories/Swim";
import Accessories from "./pages/categories/Accessories";
import Activewear from "./pages/categories/Activewear";
import Coats from "./pages/categories/Coats";
import Lounge from "./pages/categories/Lounge";
import Cart from "./pages/Cart";
import CartContext from './store/CartContext';
import SearchPage from "./pages/SearchPage";

export default function App() {




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
        <Route path="/products/:id" element ={<ProductDetails />}/>
        <Route  path="/cart" element ={<Cart />}/>
        <Route  path="/search" element ={<SearchPage />}/>
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


