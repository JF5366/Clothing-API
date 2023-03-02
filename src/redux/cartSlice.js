// import { createSlice } from "@reduxjs/toolkit";

// // For Add Item to Cart
// export const addCart = (item) => {
//     return {
//       type: "",
//       payload: item
//     };
//   };
  
//   // For Delete Item From Cart
//   export const delCart = (item) => {
//     return {
//       type: "DELITEM",
//       payload: item
//     };
//   };
// // ////////////////////////

const cart = [];

const handleCart =(state = cart, action) => {
    const item = action.payload;
    switch (action.type) {
        case "ADDITEM":
            // Check if Item is Already Exist
            const exist = state.find((clothes)=> clothes.id === item.id);
            if(exist){
                // Increase the Quantity
                return state.map((clothes)=>
                clothes.id === item.id ? {...clothes, qty: clothes.qty + 1} : clothes
                );
            }else{
                const item = action.payload;
                return[
                    ...state,
                    {
                        ...item,
                        qty: 1,
                    }
                ]
            }
            break;

            case "DELITEM":
                const exist1 = state.find((clothes)=> clothes.id === item.id);
                if(exist1.qty === 1){
                    return state.filter((clothes)=> clothes.id !== exist1.id);
                }else{
                    return state.map((clothes)=>
                        clothes.id === item.id ? {...clothes, qty: clothes.qty-1} : clothes
                    );
                }
                break;
           
        default:
            return state;
            break;
    }

}

export default handleCart;


////////////////////
//   let cart = []

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     carts: [...cart]
//   },
//   reducers: {
//     ADDITEM: (state, action) => {
//       let item = {
//         text: action.payload,
//         completed: false,
//         id: crypto.randomUUID()
//       };
//       state.carts.push(item); 
//     },
//     DELITEM: (state, action) => {
//       let index = state.carts.findIndex((item) => item.id === action.item.id);
//       state.carts.splice(index, 1);
//     },
//     // completeItem: (state, action) => {
//     //   let index = state.carts.findIndex((item) => item.id === action.payload.id);
//     //   state.carts[index].completed = !state.carts[index].completed;
//     // }
//   }
// });

// // let [cart, dispatch] = useReducer(() => {}, [])

// export default cartSlice.reducer;
// export const { addItem, deleteItem, completeItem } = cartSlice.actions;
