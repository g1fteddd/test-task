import React, { useEffect } from "react";
import { useAppDispatch } from "./redux/store";
import { fetchStocks } from "./redux/stocks/asyncActions";
import { useSelector } from "react-redux";
import { stocksSelector } from "./redux/stocks/selectors";
import StocksTable from "./components/StocksTable";
import { IStock } from "./redux/stocks/types";
import Pagination from "./components/Pagination";
import { paginate } from "./utils/paginate/paginate";
import { filtersSelector } from "./redux/filters/selectors";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { setStocks } from "./redux/stocks/slice";

const App: React.FC = () => {
    const dispatch = useAppDispatch();

    const { stocks, totalCount } = useSelector(stocksSelector);
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
    }, [dispatch]);

    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        const items = [...stocks];
        const [reorderedItem] = items.splice(
            result.source.index + pagination.limit * (pagination.page - 1),
            1
        );
        items.splice(
            result.destination.index + pagination.limit * (pagination.page - 1),
            0,
            reorderedItem
        );
        dispatch(setStocks(items));
    };

    const stocksCrop = paginate(stocks, pagination.page, pagination.limit);

    return (
        <div>
            <h1 className="title">Top {totalCount} most active stocks</h1>
            <DragDropContext onDragEnd={onDragEnd}>
                <StocksTable data={stocksCrop} columns={columns} />
            </DragDropContext>
            {totalCount !== 0 && <Pagination />}
        </div>
    );
};

export default App;
