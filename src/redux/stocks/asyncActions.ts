import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IStock } from "./types";
import { StocksDto } from "./dto";

export const fetchStocks = createAsyncThunk("stocks/fetchStocks", async () => {
    const response = await axios.get(
        "https://cloud.iexapis.com/stable/stock/market/list/mostactive",
        {
            params: {
                token: "pk_094f3048c02145189be87b8dc41de0cd",
                listLimit: 200,
            },
        }
    );

    const filteredData: IStock[] = response.data.map((data: IStock) => {
        const stockDto = new StocksDto(data);
        return { ...stockDto };
    });

    return filteredData;
});
