import { IStock } from "../../redux/stocks/types";
import { paginate } from "./paginate";

describe("Test Paginate", () => {
    const data: IStock[] = [
        {
            symbol: "TSLA",
            companyName: "Tesla Inc",
            currency: "USD",
            avgTotalVolume: 113779148,
            latestPrice: 242.65,
        },
        {
            symbol: "TSLA",
            companyName: "Tesla Inc",
            currency: "USD",
            avgTotalVolume: 113779148,
            latestPrice: 242.65,
        },
        {
            symbol: "TSLA",
            companyName: "Tesla Inc",
            currency: "USD",
            avgTotalVolume: 113779148,
            latestPrice: 242.65,
        },
        {
            symbol: "TSLA",
            companyName: "Tesla Inc",
            currency: "USD",
            avgTotalVolume: 113779148,
            latestPrice: 242.65,
        },
        {
            symbol: "TSLA",
            companyName: "Tesla Inc",
            currency: "USD",
            avgTotalVolume: 113779148,
            latestPrice: 242.65,
        },
    ];

    test("Нормальные данные", () => {
        expect(paginate(data, 1, 5).length).toBe(5);
    });
    test("Первая страница с лимитом 0", () => {
        expect(paginate(data, 1, 0).length).toBe(0);
    });
    test("Вторая страница с лимитом 2", () => {
        expect(paginate(data, 2, 2).length).toBe(2);
    });
    test("Третья страница с лимитом 2", () => {
        expect(paginate(data, 3, 2).length).toBe(1);
    });
    test("Четвёртая страница с лимитом 2", () => {
        expect(paginate(data, 4, 2).length).toBe(0);
    });
    test("Пустые данные", () => {
        expect(paginate([], 1, 10).length).toBe(0);
    });
});
