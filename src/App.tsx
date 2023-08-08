import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/store";
import { fetchStocks } from "./redux/stocks/asyncActions";
import { useSelector } from "react-redux";
import { stocksSelector } from "./redux/stocks/selectors";

function App() {
    const dispatch = useAppDispatch();

    const { stocks } = useSelector(stocksSelector);

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    useEffect(() => {
        console.log(stocks);
    }, [stocks]);
    return (
        <div>
            <h1>Stock List</h1>
        </div>
    );
}

export default App;
