export async function getClothes(search) {
    //let randomNum = Math.floor(Math.random() * 1000)
    // let search = ""; //try passing 'search' as a param in getClothes so you can enter it elsewhere
    let resultsCount = 9;
    const key = process.env.REACT_APP_KEY;
  
    let url = `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=0&limit=${resultsCount}&country=US&sort=freshness&q=${search}&currency=USD&sizeSchema=US&lang=en-US`;

    
  
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com"
      }
    };
  
    try {
      let response = await fetch(url, options); 
      let data = await response.json();
      // console.log(data);
      return data;
    } catch (error) {
      console.log("something went wrong");
    }
  }
  