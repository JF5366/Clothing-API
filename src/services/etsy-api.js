export async function getEtsy() {

    //let search = "boho"; //try passing 'search' as a param in getClothes so you can enter it elsewhere
    const key2 = process.env.REACT_APP_KEY2;
    const key = process.env.REACT_APP_KEY;
    const key3 = "r7eun9bdb2f657zb4ikh5z1n";
    const limit = 3;
    const page = 3;

    let url = `https://community-etsy.p.rapidapi.com/listings/active?api_key=${key2}`
    //`https://openapi.etsy.com/v2/listings/trending?includes=MainImage(url_570xN),User(login_name),Shop(shop_name)&fields=listing_id,user_id,title,price,url&limit=${limit}&page=${page}&api_key=${key3}`
    // `https://community-etsy.p.rapidapi.com/listings/active?api_key=${key2}`;
    // https://openapi.etsy.com/v2/listings/active?api_key=${key2}
  
//https://openapi.etsy.com/v2/listings/:listing_id

//https://openapi.etsy.com/v2/listings/trending?includes=MainImage(url_570xN),User(login_name),Shop(shop_name)&fields=listing_id,user_id,title,price,url&limit=${this.state.limit}&page=${this.state.page}&api_key=${apiKey}
  
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'key',
		'X-RapidAPI-Host': 'community-etsy.p.rapidapi.com'
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
  

// async function getEtsyListings() {
//     const containerDiv = document.getElementById('etsy-listings');
  
//     const response = await fetch('https://happycoding.io/api/etsy-listings.json');
//     const listings = await response.json();
  
//     const indexes = [];
//     while (indexes.length < 8) {
//       const index = Math.floor(Math.random() * listings.length);
//       if (!indexes.includes(index)) {
//         indexes.push(index);
//       }
//     }
  
//     for (const index of indexes) {
//       const listing = listings[index];
//       containerDiv.appendChild(buildEtsyThumbnail(listing));
//     }
//   }
  
//   function buildEtsyThumbnail(listing) {
//     const div = document.createElement('div');
//     div.classList.add('etsy-thumbnail');
//     div.innerHTML += `<a href="${listing.url}"><img src="${listing.imageSmallUrl}" /></a>`;
//     div.innerHTML += `<a href="${listing.url}">${listing.title}</a>`;
//     return div;
//   }
  
//   getEtsyListings();