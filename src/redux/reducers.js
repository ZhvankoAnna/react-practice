import { createReducer } from "@reduxjs/toolkit";
import productsReducer from './products/products-slice'

export const rootReducer = createReducer({
    products: productsReducer,
})