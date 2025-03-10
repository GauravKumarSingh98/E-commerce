import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/ProductSlice"
import cartReducer from "../Features/cartSlice"

export const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    }
})