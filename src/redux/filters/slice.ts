import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IFiltersState, IPagination } from "./types";

const initialState: IFiltersState = {
    pagination: {
        page: 1,
        limit: 5,
    },
};

const filtersSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        setPagination: (state, action: PayloadAction<IPagination>) => {
            state.pagination = action.payload;
        },
    },
});

export const { setPagination } = filtersSlice.actions;

export default filtersSlice.reducer;
