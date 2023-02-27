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
import Carousel from "../components/Carousel";
import {getEtsy} from '../services/etsy-api'


export default function Main() {
    
  
    return (
      <div className="mainPage">
        <div className="carouselParent">
            <Carousel />
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
             
{/*            
            <Link to="/shoes" className="shoesLink linkCard"><Shoes className="pantsCard card" clothes={clothes} />Shoes</Link>
            <Link to="/tops" className="topsLink linkCard"><Tops className="pantsCard card" clothes={clothes} />Tops</Link>
             */}
            
            {/* {clothes} */}
        </div>
        <div getClothes={getEtsy}>
            <h1>Etsy Listings</h1>

            <div id="etsy-listings"></div>
        </div>
        <div className="search">
            {/* <h1>Search for clothes</h1>
            <Search getClothes={getClothes} />
            <SearchDisplay clothes={clothes} /> */}
         </div>
      </div>
    );
  }