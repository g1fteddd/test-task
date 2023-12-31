import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IStock, IStocksState, Status } from "./types";
import { fetchStocks } from "./asyncActions";

const initialState: IStocksState = {
    stocks: [],
    status: Status.LOADING,
    totalCount: 0,
};

const stocksSlice = createSlice({
    name: "stocks",
    initialState,
    reducers: {
        setStocks: (state, action: PayloadAction<IStock[]>) => {
            state.stocks = action.payload;
        },
    },
    extraReducers(builder) {
        builder.addCase(fetchStocks.pending, (state) => {
            state.stocks = [];
            state.status = Status.LOADING;
            state.totalCount = 0;
        });
        builder.addCase(
            fetchStocks.fulfilled,
            (state, action: PayloadAction<IStock[]>) => {
                state.stocks = action.payload;
                state.status = Status.SUCCESS;

                state.totalCount = action.payload.length;
            }
        );
        builder.addCase(fetchStocks.rejected, (state) => {
            state.stocks = [];
            state.status = Status.ERROR;
            state.totalCount = 0;
        });
    },
});

export const { setStocks } = stocksSlice.actions;

export default stocksSlice.reducer;
