import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


export default function Clothes(props){

    const key = process.env.REACT_APP_KEY;
    let {symbol} = useParams() 
    let navigate = useNavigate()

    let [coin, setCoin] = useState()

    // async function getCoin (){}
    const getCoin = async() => {
      try{
        const response = await fetch(url)  
        //make fetch await the response, and save it in a var "response"
        const data = await response.json() //await (json to be stored as data) this as well because it takes a while
        setCoin(data)
      } catch(error){ //wrap the whole thing in a try catch to catch any errors
        console.error(error);
      }
      console.log({coin})
    }
        
        useEffect(() => {
           getCoin()
        }, [])
    
        function goBack(){
            //via useNavigate
            //navigate('/') //to get to home page
            navigate(-1) //to previous page
        }
   
   //create a loaded and loading function
    const loaded = () => {
         return(
             <div>
                  <h1>{coin.asset_id_base} / {coin.asset_id_quote}</h1>
                 <h2>{coin.rate}</h2>
                 <button onClick={goBack}>Back</button>
             </div>
         )

    }


    const loading = () => {
        return <h1>Loading....</h1>
}



    let url = `http://rest-sandbox.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${key}`;
    return coin ? loaded() : loading()

}

