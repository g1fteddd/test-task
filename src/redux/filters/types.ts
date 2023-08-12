export interface IPagination {
    page: number;
    limit: number;
}

export interface IFiltersState {
    pagination: IPagination;
}
