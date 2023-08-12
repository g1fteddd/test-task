import { IStock } from "../../redux/stocks/types";

export function paginate(
    items: IStock[],
    pageNumber: number,
    pageSize: number
): IStock[] {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...items].splice(startIndex, pageSize);
}
