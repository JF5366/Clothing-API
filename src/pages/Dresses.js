import { getClothes } from "../services/asos-api";
import { Link, Outlet, useNavigate, useParams } from "react-router-dom";
import ClothingTypeCard from "../components/ClothingTypeCard";
import { useEffect, useState } from "react";
import ProductDetails from "../components/ProductDetails";
//import { getEtsy } from "../services/etsy-api";


export default function Dresses(){
  // let params = useParams(); 
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }
    
    let [dresses, setDresses] = useState([]);
  
    let getData = async () => {
      let allDresses = await getClothes("dresses");
      console.log(allDresses);
  
      let dressComponents = allDresses.products.map(item => {
        let imgUrl = "https://" + item.imageUrl;
        return (
          <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <ClothingTypeCard name={item.name} key={item.id} id={item.id} imgsrc={imgUrl} clothingItem={{item}}/>
                    <ProductDetails id={item.id}>Product details</ProductDetails>
                      {/* <ProductDetails 
                        name={item.name} 
                        key={item.id} 
                        id={item.id} 
                        imgsrc={imgUrl} 
                        brand={item.brandName}
                        price={item.price.current.text}
                        color={item.colour}
                        /> */}
                  </Link>
                  
                  
            
                  {/* <ClothingTypeCard name={item.name} key={item.id} id={item.id} imgsrc={imgUrl} clothingItem={{item}}/> */}
                  
                  
                  {/* <Outlet /> */}
                  {/* <ProductDetails dresses={item} >{item.name}</ProductDetails>
                 */}
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
                {dresses} 
                {/* <Link to={`/pages/dresses/${item.name}`}> {dresses}</Link> */}
                {/* <ProductDetails dresses={dresses} /> */}
                {/* if(useLocation hook to check current path)? <Outlet /> : {dresses} */}
                </div>

              {/* <div>
                 !params.id && (<div>{dresses}</div>)
                 <Outlet />
                </div>                */}
            
        </div>
    )
}