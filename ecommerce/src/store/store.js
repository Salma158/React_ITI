import { configureStore } from "@reduxjs/toolkit";

import userSlice from "./userSlice"
import productReducer from "./productSlice";

export default configureStore({
    reducer:{
        userSlice,
        products: productReducer
    }
})