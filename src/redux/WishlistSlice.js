import { createReducer, createSlice } from "@reduxjs/toolkit";


const initialState = []

const product = JSON.parse(localStorage.getItem('wishlist'));
      console.log(product)




const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist: (state, {payload}) => {  
            const { id } = payload; //this will give the item id
            // console.log(state.initialState)
            
           // const find = state.find((item) => item.id === id);
           // console.log(find)
            if(state.find((item) => item.id === id)){
                return state.map((item) =>
                item.id === id ? {...item, quantity: item.quantity + 1} : item);
            } else{
                state.push(payload)
               // state.push({...payload, quantity: 1});
                
            } 
        },
        setWishlist: (state, {payload}) => {
            return payload;
        },
        deleteFromWishlist: (state, {payload}) => {   
            const { id } = payload;
            console.log({payload})
            console.log(`state = ${state}`)
            let index = state.findIndex((item) => item.id === payload);
            state.splice(index, 1);


           // return state.filter((product) => product.id !== payload.id);
     
                // 
            // const find = state.find((item) => item.id === id); //item.id === product.id?????
            // return state.filter((product) => product.id !== find.id);

         },
         clearWishlist(state) {
             return [];
         }
    },
})
export const { addToWishlist, setWishlist, clearWishlist, deleteFromWishlist } = wishlistSlice.actions;
const wishlistReducer = wishlistSlice.reducer

export default wishlistReducer;