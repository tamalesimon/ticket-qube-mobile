import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    toggleBottomSheet: false
}


const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        toggleSheet: (state) => {
            state.toggleBottomSheet = !state.toggleBottomSheet;
        }
    }
})

export const { toggleSheet } = layoutSlice.actions;

export default layoutSlice.reducer