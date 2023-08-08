import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import stocksReducer from "./stocks/slice";

export const store = configureStore({
    reducer: {
        stocks: stocksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
