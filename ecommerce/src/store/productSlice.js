import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import  axiosInstace  from "../axios/axios";

export const getProductsThunk = createAsyncThunk(
    "products/fetchProducts",
    async () => {
        const res = await axiosInstace.get('products');
        return res.data
    }
)
export const productSlice = createSlice({
    name:"products",
    initialState: {
        data:[],
        loading:false,
        error:"",
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = "";
        });
        builder.addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload; // response
        });
        builder.addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        });
    },
})

export default productSlice.reducer