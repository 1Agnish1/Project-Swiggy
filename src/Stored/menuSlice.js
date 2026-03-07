
import { createSlice } from "@reduxjs/toolkit"
const menuSlice = createSlice({
    name: "menu",
    initialState: {
        menus: {}
    },
    reducers: {
        addMenu: (state, action) => {
            const { id, data } = action.payload;
            state.menus[id] = data;
        }
    }
});

export const { addMenu } = menuSlice.actions;
export default menuSlice.reducer;