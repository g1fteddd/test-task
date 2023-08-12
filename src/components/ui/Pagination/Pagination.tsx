import React from "react";
import styles from "./Pagination.module.scss";
import { useAppDispatch } from "../../../redux/store";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../../redux/filters/selectors";
import { stocksSelector } from "../../../redux/stocks/selectors";
import range from "lodash.range";
import { setPagination } from "../../../redux/filters/slice";

const Pagination: React.FC = () => {
    const dispatch = useAppDispatch();
    const { pagination } = useSelector(filtersSelector);

    const { totalCount } = useSelector(stocksSelector);
    const pageCount = Math.ceil(totalCount / pagination.limit);

    let pages;

    if (pagination.page === 1 || pagination.page === 2) {
        pages = range(1, 4);
    } else if (
        pagination.page === pageCount - 1 ||
        pagination.page === pageCount
    ) {
        pages = range(pageCount - 2, pageCount + 1);
    } else {
        pages = range(pagination.page - 1, pagination.page + 2);
    }

    const handleClick = (newPage: number) => {
        dispatch(setPagination({ page: newPage, limit: 5 }));
    };

    if (pageCount === 1) {
        return <></>;
    }

    return (
        <ul className={styles["pagination"]}>
            <li
                className={pagination.page === 1 ? styles["disabled"] : ""}
                onClick={() => handleClick(pagination.page - 1)}
            >
                &lt;
            </li>
            {pages.map((page) => (
                <li
                    key={page}
                    className={page === pagination.page ? styles["active"] : ""}
                    onClick={() => handleClick(page)}
                >
                    {page}
                </li>
            ))}
            <li
                className={
                    pagination.page === pageCount ? styles["disabled"] : ""
                }
                onClick={() => handleClick(pagination.page + 1)}
            >
                &gt;
            </li>
        </ul>
    );
};

export default Pagination;
