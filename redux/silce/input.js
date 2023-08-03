import {createSlice} from "@reduxjs/toolkit";

export const inputState = createSlice({
    name: "input",
    initialState:{
        OneValue: 0
    },
    reducers:{
        getFunction:(state)=>{
               state.OneValue = 3
        }
    }
})

export const {getFunction} = inputState.actions;
export default inputState.reducer