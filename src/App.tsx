import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/store";
import { fetchStocks } from "./redux/stocks/asyncActions";
import { useSelector } from "react-redux";
import { stocksSelector } from "./redux/stocks/selectors";
import Table from "./components/ui/StocksTable";
import { IStock } from "./redux/stocks/types";
import Pagination from "./components/ui/Pagination";
import { paginate } from "./utils/paginate";
import { filtersSelector } from "./redux/filters/selectors";

function App() {
    const dispatch = useAppDispatch();

    const { stocks } = useSelector(stocksSelector);
    const { pagination } = useSelector(filtersSelector);

    const columns: { Header: string; accessor: keyof IStock }[] = [
        {
            Header: "Symbol",
            accessor: "symbol",
        },
        {
            Header: "Company Name",
            accessor: "companyName",
        },
        {
            Header: "Currency",
            accessor: "currency",
        },
        {
            Header: "Avg Total Volume",
            accessor: "avgTotalVolume",
        },
        {
            Header: "Latest Price",
            accessor: "latestPrice",
        },
    ];

    useEffect(() => {
        dispatch(fetchStocks());
    }, []);

    const stocksCrop = paginate(stocks, pagination.page, pagination.limit);

    return (
        <div>
            <h1 className="title">Top 200 most active stocks</h1>
            <Table data={stocksCrop} columns={columns} />
            <Pagination />
        </div>
    );
}

export default App;
