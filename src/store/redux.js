import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartMangeSlice";
import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
