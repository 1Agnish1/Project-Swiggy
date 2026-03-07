import { createSlice } from "@reduxjs/toolkit"
const restaurantSlice = createSlice({
    name: "restaurant",
    initialState: {
        restaurantList: []
    },
    reducers: {
        addRestaurants: (state, action) => {
            state.restaurantList = action.payload;
        }
    }
});

export const { addRestaurants } = restaurantSlice.actions;
export default restaurantSlice.reducer;