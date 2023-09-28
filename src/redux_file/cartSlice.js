// import { createSlice } from "@reduxjs/toolkit";
// const cartSlice = createSlice({
//     name:"cart",
//     initialState:{
//         items:[]
//     },
//     reducers:{
//         addItem:(slice,action)=>{
//             slice.items.push(action.payload)
//         },
//         removeItem:(slice,action)=>{
//             slice.items.pop()
//         },
//         clearCart:(slice)=>{
//             slice.items.length = 0
//         }
//     }
// })

// export const {addItem, removeItem, clearCart} = cartSlice.actions;
// export default cartSlice.reducers;



import { createSlice } from "@reduxjs/toolkit";

 const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items : []
    },
    reducers:{
        addItems: (state,action)=>{
           state.items.push(action.payload)
        },
        removeItems: (state,action)=>{
            state.items.pop()
        },
        clearItems: (state,action)=>{
            state.items.length = 0
        }
    }
})

// you have export two things 1) action 2)reducers
export const {addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer