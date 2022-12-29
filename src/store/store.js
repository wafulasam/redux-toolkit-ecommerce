import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import navigationTabReducer from "./slices/navigationTabSlice";
import counterReducer from "./slices/counterSlice";
import todoReducer from "./slices/todoSlice";
import { productsApi } from "./apis/productsApis";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        navigationTabs: navigationTabReducer,
        todos: todoReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})
setupListeners(store.dispatch)