import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "services/api/getProducts";

export const fetchProducts = createAsyncThunk(
    'products/get',
    async(_, {rejectWithValue}) => {
        try {
            const {data} = await getProducts();
            return data;
        } catch ({response}) {
            return rejectWithValue(response);
        }
    }
)