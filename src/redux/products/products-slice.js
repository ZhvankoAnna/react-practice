import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./products-operations";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchProducts.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(fetchProducts.fulfilled, (state, {payload}) => {
            state.isLoading = false;
            state.items = payload;
        })
        .addCase(fetchProducts.rejected, (state, {payload}) => {
            state.isLoading = false;
            state.error = payload;
        })
    }
})

export default productsSlice.reducer;