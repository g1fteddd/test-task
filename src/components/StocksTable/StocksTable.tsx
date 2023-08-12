import React from "react";
import styles from "./StocksTable.module.scss";
import { IStock } from "../../redux/stocks/types";
import { Droppable, Draggable } from "react-beautiful-dnd";

interface ITableProps {
    data: IStock[];
    columns: {
        Header: string;
        accessor: keyof IStock;
    }[];
}

const StocksTable: React.FC<ITableProps> = ({ data, columns }) => {
    return (
        <div className={styles["container"]}>
            <table>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.accessor}>{column.Header}</th>
                        ))}
                    </tr>
                </thead>
                <Droppable droppableId="stocks">
                    {(provided) => (
                        <tbody
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                        >
                            {data.map((rows, index) => (
                                <Draggable
                                    key={rows.symbol}
                                    draggableId={rows.symbol}
                                    index={index}
                                >
                                    {(provided) => (
                                        <tr
                                            ref={provided.innerRef}
                                            {...provided.dragHandleProps}
                                            {...provided.draggableProps}
                                        >
                                            <td>{rows.symbol}</td>
                                            <td>{rows.companyName}</td>
                                            <td>{rows.currency}</td>
                                            <td>{rows.avgTotalVolume}</td>
                                            <td>{rows.latestPrice}</td>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </tbody>
                    )}
                </Droppable>
            </table>
        </div>
    );
};

export default StocksTable;
