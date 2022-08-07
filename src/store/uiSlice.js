import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    cartVis: false,
    notification:null
  },
  reducers: {
    cartVis(state) {
      state.cartVis = !state.cartVis;
    },
    showNotification(state,action){
        state.notification={
            status:action.payload.status,
            title:action.payload.title,
            message:action.payload.message
        }
    }
  },
});

export const uiSliceActions=uiSlice.actions;
export default uiSlice.reducer;
