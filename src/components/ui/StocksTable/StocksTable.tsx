import React from "react";
import styles from "./StocksTable.module.scss";
import { IStock } from "../../../redux/stocks/types";

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
                <tbody>
                    {data.map((rows) => (
                        <tr key={rows.symbol} draggable={true}>
                            <td>{rows.symbol}</td>
                            <td>{rows.companyName}</td>
                            <td>{rows.currency}</td>
                            <td>{rows.avgTotalVolume}</td>
                            <td>{rows.latestPrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StocksTable;
