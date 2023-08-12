import { rangePagination } from "./rangePagination";

describe("Test rangePagination", () => {
    test("Граничное значение снизу", () => {
        expect(rangePagination(40, 0)).toEqual([-1, 0, 1]);
    });
    test("Предграничное значение снизу", () => {
        expect(rangePagination(40, 1)).toEqual([1, 2, 3]);
    });
    test("Предграничное значение снизу 2", () => {
        expect(rangePagination(40, 2)).toEqual([1, 2, 3]);
    });
    test("Нормальные данные", () => {
        expect(rangePagination(40, 25)).toEqual([24, 25, 26]);
    });
    test("Предграничное значение сверху", () => {
        expect(rangePagination(40, 39)).toEqual([38, 39, 40]);
    });
    test("Граничное значение сверху", () => {
        expect(rangePagination(40, 40)).toEqual([38, 39, 40]);
    });
});
