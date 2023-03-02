import { useEffect, useState } from "react";
import { getClothes } from "../services/asos-api";
import ClothingTypeCard from "../components/ClothingTypeCard";
// import Search from "../components/Search";
// import SearchDisplay from "../components/SearchDisplay";
import { Link } from "react-router-dom";
import Dresses from "./categories/Dresses";
import Pants from "./categories/Pants";
import Shoes from "./categories/Shoes";
import Tops from "./categories/Tops";
import Carousel from "../components/Carousel";



export default function Main() {
    
  
    return (
      <div className="mainPage">
        <div className="carouselParent">
            <Carousel />
        </div>
        <div className="dashHeader">
            <h1>DISCOVER FASHION</h1>
            <h3>Shop the hottest trands from ...</h3>
        </div>
        <div className="dashParent">
            <Link to="/dresses" className="dressesLink" key="dressesLink">
                <div className="linkText"> <h1 className='title'>DRESSES</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>
            <Link to="/pants" className="pantsLink">
               <div className="linkText"> <h1 className='title'>PANTS</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>
            <Link to="/shoes" className="shoesLink"> 
                 <div className="linkText"> <h1 className='title'>SHOES</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

            <Link to="/tops" className="topsLink">
            <div className="linkText"> <h1 className='title'>TOPS</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

                <Link to="/activewear" className="activewearLink">
            <div className="linkText"> <h1 className='title'>ACTIVEWEAR</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

                <Link to="/coats" className="coatsLink">
            <div className="linkText"> <h1 className='title'>COATS</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

                <Link to="/lounge" className="loungeLink">
            <div className="linkText"> <h1 className='title'>LOUNGE</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

                <Link to="/swim" className="swimwearLink">
            <div className="linkText"> <h1 className='title'>SWIMWEAR</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>

                <Link to="/accessories" className="accessoriesLink">
            <div className="linkText"> <h1 className='title'>ACCESSORIES</h1>
                <span className='subtitle'>SHOP NOW</span></div> </Link>
             </div>

  
      </div>
    );
  }