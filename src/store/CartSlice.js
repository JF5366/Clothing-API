import { createReducer, createSlice } from "@reduxjs/toolkit";


const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, {payload}) => {   //takes old state(state) and an action
            const { id } = payload;
            state.push({...payload, quantity: 1});
        },
        setCart: (state, {payload}) => {
            return payload;

        }
    },
})
export const { addToCart, setCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer

export default cartReducer;


// let cart = []

// const handleCart = (state = cart, action) => {
//     const product = action.payload;
//     switch (action.type) {
//         case "ADD":
//             // Check if Product is Already Exist
//             const exist = state.find((item)=> item.id === product.id);
//             if(exist){
//                 // Increase the Quantity
//                 return state.map((item)=>
//                 item.id === product.id ? {...item, qty: item.qty + 1} : item
//                 );
//             }else{
//                 const product = action.payload;
//                 return[
//                     ...state,
//                     {
//                         ...product,
//                         qty: 1,
//                     }
//                 ]
//             }
//             break;

//             case "DELETE":
//                 const exist1 = state.find((item)=> item.id === product.id);
//                 if(exist1.qty === 1){
//                     return state.filter((item)=> item.id !== exist1.id);
//                 }else{
//                     return state.map((item)=>
//                         item.id === product.id ? {...item, qty: item.qty-1} : item
//                     );
//                 }
//                 break;
    
//         default:
//             return state;
//             break;
//     }

// }

// export default handleCart;

///////////////////////////////////////////////////

// function reducer(state, action){
//     // console.log('state: ', state)
//     // console.log('action: ', action)
//   switch(action.type){
//     case 'ADD':
//         let item = {
//           text: action.payload,
//           id: action.payload.id
//         };
//       return [...state, item]

//     case 'DELETE':
//       let newCart = state.filter((item) => item.id !== action.payload.id);
//       //only need action.payload because the payload is the id
//       return newCart
    

//      default:
//        return state
//   }
// }