import { createReducer, createSlice } from "@reduxjs/toolkit";


const initialState = []

const product = JSON.parse(localStorage.getItem('product'));
      console.log(product)




const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {  
            const { payload } = action;
            state.push(payload)
        },

            /////////////////////////////////////////////
            //const { id } = payload; //this will give the item id
            // console.log(state.initialState)
            
           // const find = state.find((item) => item.id === id);
///////////////////////////////////////
            // if(state.find((item) => item.id === id)){
            //     return state.map((item) =>
            //     item.id === id ? {...item, quantity: item.quantity + 1} : item);
            // } else{
            //     state.push(payload)
               // state.push({...payload, quantity: 1});
                
           // } 
       
        setCart: (state, {payload}) => {
            return payload;
        },
        deleteFromCart: (state, {payload}) => {   
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
         clearCart(state) {
             return [];
         }
    },
})
export const { addToCart, setCart, clearCart, deleteFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer

export default cartReducer;




//const initialState = []
//const cartSlice = createSlice({
//     name: "cart",
//     initialState,
//     reducers: {
//         addToCart: (state, {payload}) => {  
//             const { id } = payload; //this will give the item id
//             // console.log(state.initialState)
            
//             const find = state.find((item) => item.id === id);
//             console.log(id)
//             if(find){
//                 return state.map((item) =>
//                 item.id === id ? {...item, quantity: item.quantity + 1} : item);
//             } else{
//                 state.push({...payload, quantity: 1});
                
//             } 
//         },
//         setCart: (state, {payload}) => {
//             return payload;
//         },
//         deleteFromCart: (state, {payload}) => {   

//             console.log({payload})
//             console.log(`state = ${state}`)

//             // let index = state.findIndex((item) => item.id === action.payload);
//             // state.splice(index, 1);


//            // return state.filter((product) => product.id !== payload.id);
     
//                 // 
//             // const find = state.find((item) => item.id === id); //item.id === product.id?????
//             // return state.filter((product) => product.id !== find.id);
            
//             //     const { id } = payload;
//         //     state.push({...payload, quantity: 1});
//          },
//          clearCart(state) {
//              return [];
//          }
//     },
// })
// export const { addToCart, setCart, clearCart, deleteFromCart } = cartSlice.actions;
// const cartReducer = cartSlice.reducer

// export default cartReducer;

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