export interface ProductsResponse<T> {
    products: T[];
    total: number;
    skip: number;
    limit: number;
}