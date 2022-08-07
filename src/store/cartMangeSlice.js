import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartContent: [{ title: "test ", quantity: 1, total: 6, price: 6, id: 1 }],
    totalQuantity: 1,
    chinged:false
  },
  reducers: {
    replace(state,action){
      state.cartContent=action.payload;
    },
    addToCart(state, action) {
      state.cartContent = [...state.cartContent, action.payload];
      state.chinged=true;
    },
    addQuantity(state, action) {
      state.cartContent.forEach((el) => {
        if (el.id === action.payload) {
          el.quantity++;
          el.total = el.quantity * el.price;
        }
      });
      state.chinged=true;
    },
    subQuantity(state, action) {
      state.cartContent.forEach((el) => {
        if (el.id === action.payload) {
          el.quantity--;
          el.total = el.quantity * el.price;
        }
      });
      state.chinged=true;
    },
    removeItem(state, action) {
      state.cartContent = state.cartContent.filter(
        (el) => !(el.id === action.payload)
      );
      state.chinged=true;
    },
    finalQuantaty(state){
        state.totalQuantity=state.cartContent.reduce((total,el)=>total+el.quantity,0)
    }
  },
});


export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
