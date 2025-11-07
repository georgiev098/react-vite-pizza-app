const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addNewItem(state, action) {
      state.cart.push(action.payload);
    },
    removeItem(state, action) {
      state.cart = state.cart.filter((item) => item.pzzaId !== action.payload);
    },
    incraeseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pzzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pzzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addNewItem,
  removeItem,
  incraeseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
