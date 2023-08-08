export enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

export interface IStock {
    symbol: string;
    companyName: string;
    currency: string;
    avgTotalVolume: number;
    latestPrice: number;
    latestVolume: number;
}

export interface IStocksState {
    stocks: IStock[];
    status: Status;
    totalCount: number;
}
