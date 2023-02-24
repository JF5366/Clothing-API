export async function getClothes() {
    //let randomNum = Math.floor(Math.random() * 1000)
    let search = "boho";
    let resultsCount = 3;
    const key = process.env.REACT_APP_KEY;
  
    let url = `https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=0&limit=${resultsCount}&country=US&sort=freshness&q=${search}&currency=USD&sizeSchema=US&lang=en-US`;
  
    //let url = 'https://asos2.p.rapidapi.com/categories/list?country=US&lang=en-US'
    //Use this url to get the data, cope obj and paste into test editor, search for categoryId
    //codes:
    //4209  = shoes
    //4208 = denim
  
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": key,
        "X-RapidAPI-Host": "asos2.p.rapidapi.com"
      }
    };
  
    try {
      let response = await fetch(url, options); // returns a Promise
      let data = await response.json();
      console.log(data);
      return data; // setMovie(data);
    } catch (error) {
      console.log("something went wrong");
    }
  }
  