import {createSlice} from "@reduxjs/toolkit";

const cartSlice = createSlice({


    name:"cart",
    initialState:{
        items:[]
    },
     reducers:{
        addItem:(state,action) => {
                state.items.push(action.payload);
        },
        removeItem:(state,action)=> {
            state.items.pop()
        },
        //originalState={items:["pizza"]}
        clearCart:(state)=>{

            //RTK -either mutatae existing state or return new state 
            //state.items.length= 0 //original state = []
            // state.items.length = 0;
            return {items:[]};//this new object will be replaced inside originalState ={items:[]}
        },
     }
})

export const{addItem,removeItem,clearCart} =cartSlice.actions;
export default cartSlice.reducer;