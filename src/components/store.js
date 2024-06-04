import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "../pages/landing_page/productsApi";
import { CartSlice } from "../pages/cart/CartSlice";

export const store = configureStore({
	reducer: {
		[productsApi.reducerPath]: productsApi.reducer,
		cart: CartSlice.reducer,
	},
	// to help with cache (caching)
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(productsApi.middleware),
});

setupListeners(store.dispatch);
