import {configureStore} from "@reduxjs/toolkit";
import counterStateSlice from "../silce/counter.js"
import inputState from "../silce/input.js";
export default configureStore({
    reducer:{
        counter:counterStateSlice,
        setCount: inputState
    }
})
