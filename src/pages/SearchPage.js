import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ClothingTypeCard from "../components/ClothingTypeCard"
import ProductDetails from "../components/ProductDetails"
// import Search from "../components/Search"
// import SearchDisplay from "../components/SearchDisplay"
import { getClothes } from "../services/asos-api"


export default function SearchPage (){
    let navigate = useNavigate() 
    function goBack(){
        navigate(-1)
    }

    let [input, setInput] = useState("");

        function handleChange(e) {
            setInput(e.target.value);
        }

        function handleSubmit(e) {
            e.preventDefault();
            getData(input);
        }
    
    let [search, setSearch] = useState([]);
  
    let getData = async () => {
      let allSearch = await getClothes(input);
      console.log(allSearch);
  
      let searchComponents = allSearch.products.map(item => {
        let imgUrl = "https://" + item.imageUrl;
        return (
          <div key={item.id}>
                <Link to={`/products/${item.id}`}>
                    <ClothingTypeCard name={item.name} key={item.id} id={item.id} imgsrc={imgUrl} clothingItem={{item}}/>
                    <ProductDetails id={item.id}>Product details</ProductDetails>
                </Link>
          </div>
          
        );
      });
  
      setSearch(searchComponents);
    };
  
    // useEffect(() => {
    //   getData("");
    // }, []);

    return(
        <div className="activewear">
             <div className="buttons">
                <button className="back" onClick={goBack}>Back</button>
                <button onClick={getData}>Call Search API</button>
              </div>
            <div className="search">
                <h1>Find Your New Style</h1>
                <form onSubmit={handleSubmit} className="searchBox">
                   <input value={input} onChange={handleChange} />
                   <button>Search</button>
                </form>
            </div>
             
            <h1></h1>
            <div className="imageCards"> 
                {search} 
            </div>
        </div>

    )





}


