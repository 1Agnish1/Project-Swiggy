import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./cartSlice"
import restaurantReducer from "./restaurantSlice";
import menuReducer from "./menuSlice";

export const store = configureStore({
    reducer: {
        cartslice: CartReducer,
        restaurant: restaurantReducer,
        menu: menuReducer
        
    }
})



