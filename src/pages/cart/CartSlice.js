import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    if (serializedState === null) {
      return { items: [], totalQuantity: 0 };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { items: [], totalQuantity: 0 };
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    // ignore write errors
    console.error("Could not save state", err);
  }
};
const initialState = loadState();

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemExists = state.items.find(
        (item) => item.id === action.payload.id,
      );
      if (itemExists) {
        itemExists.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalQuantity += 1;
      saveState(state);
    },
    increment: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
        state.totalQuantity += 1;
        saveState(state);
      }
    },
    decrement: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        state.totalQuantity -= 1;
      } else if (item && item.quantity === 1) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        state.totalQuantity -= 1;
        saveState(state);
      }
    },
    removeFromCart: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        state.totalQuantity -= item.quantity;
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id,
        );
        saveState(state);
      }
    },
  },
});

export const { addToCart, increment, decrement, removeFromCart } =
  CartSlice.actions;
export default CartSlice.reducer;
