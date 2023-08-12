import range from "lodash.range";

export function rangePagination(pageCount: number, currentPage: number) {
    if (currentPage === 1 || currentPage === 2) {
        return range(1, 4);
    } else if (currentPage === pageCount - 1 || currentPage === pageCount) {
        return range(pageCount - 2, pageCount + 1);
    } else {
        return range(currentPage - 1, currentPage + 2);
    }
}
