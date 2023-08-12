import React from "react";
import { render } from "@testing-library/react";
import StocksTable from "./StocksTable";
import { IStock } from "../../redux/stocks/types";
import { DragDropContext } from "react-beautiful-dnd";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import "@testing-library/jest-dom";

const mockStore = configureStore([]);

jest.mock("react-beautiful-dnd", () => ({
    Droppable: ({ children }: any) =>
        children(
            {
                draggableProps: {
                    style: {},
                },
                innerRef: jest.fn(),
            },
            {}
        ),
    Draggable: ({ children }: any) =>
        children(
            {
                draggableProps: {
                    style: {},
                },
                innerRef: jest.fn(),
            },
            {}
        ),
    DragDropContext: ({ children }: any) => children,
}));

describe("StocksTable", () => {
    const data: IStock[] = [
        {
            symbol: "AAPL",
            companyName: "Apple Inc.",
            currency: "USD",
            avgTotalVolume: 1000000,
            latestPrice: 150.0,
        },
        {
            symbol: "GOOG",
            companyName: "Alphabet Inc.",
            currency: "USD",
            avgTotalVolume: 500000,
            latestPrice: 2500.0,
        },
    ];

    const columns: {
        Header: string;
        accessor: keyof IStock;
    }[] = [
        { Header: "Symbol", accessor: "symbol" },
        { Header: "Company Name", accessor: "companyName" },
        { Header: "Currency", accessor: "currency" },
        { Header: "Avg Total Volume", accessor: "avgTotalVolume" },
        { Header: "Latest Price", accessor: "latestPrice" },
    ];
    const store = mockStore({});

    test("Рендер хедеров таблицы", () => {
        const { getByText } = render(
            <Provider store={store}>
                <DragDropContext onDragEnd={() => {}}>
                    <StocksTable data={data} columns={columns} />
                </DragDropContext>
            </Provider>
        );
        expect(getByText("Symbol")).toBeInTheDocument();
        expect(getByText("Company Name")).toBeInTheDocument();
        expect(getByText("Currency")).toBeInTheDocument();
        expect(getByText("Avg Total Volume")).toBeInTheDocument();
        expect(getByText("Latest Price")).toBeInTheDocument();
    });

    test("Рендер корректного количества строк", () => {
        const { getAllByRole } = render(
            <Provider store={store}>
                <DragDropContext onDragEnd={() => {}}>
                    <StocksTable data={data} columns={columns} />
                </DragDropContext>
            </Provider>
        );
        const rows = getAllByRole("row");
        expect(rows.length - 1).toBe(data.length);
    });
});
