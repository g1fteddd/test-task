import { IStock } from "./types";

export class StocksDto implements IStock {
    symbol: string;
    companyName: string;
    currency: string;
    avgTotalVolume: number;
    latestPrice: number;

    constructor(data: IStock) {
        this.symbol = data.symbol;
        this.companyName = data.companyName;
        this.currency = data.currency;
        this.avgTotalVolume = data.avgTotalVolume;
        this.latestPrice = data.latestPrice;
    }
}
