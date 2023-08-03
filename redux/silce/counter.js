import {createSlice} from "@reduxjs/toolkit";


export const counterStateSlice = createSlice({

    // as like as a state for the javascript variable value
    name:"counter",
    initialState:{
        countingValue: 0
    },
    // as a function for like a javascript
    reducers:{
        increment:(state)=>{
            state.countingValue = state.countingValue+1
        },
        decrement:(state)=>{
            state.countingValue = state.countingValue-1
        }
    }

})
export const {increment, decrement} = counterStateSlice.actions;

export default counterStateSlice.reducer