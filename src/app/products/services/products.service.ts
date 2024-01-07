import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, take } from "rxjs";
import { UserService } from "src/app/auth/services/user.service";
import { environment } from "src/environments/environment";
import { ProductsResponse } from "./dtos/products-response";
import { FullProductDto } from "./dtos/full-product.dto";

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    private url = `${environment.apiUrl}/products`;
    constructor(private http: HttpClient, private userSrv: UserService) { }

    public fetchProducts<T>(page: number, limit: number, select?: string[]): Observable<ProductsResponse<T>> {
        const skip = page * limit;
        const params: {skip: string, limit: string, select?: string} = { skip: skip.toString(), limit: limit.toString()};
        if (select) {
            params['select'] = select.join(',');
        }
        const paramsUrl = new URLSearchParams(params).toString();
        const request = `${this.url}?${paramsUrl}`;

        return this.http.get<ProductsResponse<T>>(request);
    }

    public addProduct(product: Omit<FullProductDto, 'id'>): Observable<FullProductDto> {
        return this.http.post<FullProductDto>(`${this.url}/add`, product);
    }

    public editProduct(id: string, product: Partial<Omit<FullProductDto, 'id'>>): Observable<FullProductDto> {
        return this.http.patch<FullProductDto>(`${this.url}/${id}`, product);
    }

    public deleteProduct(id: string): Observable<FullProductDto> {
        return this.http.delete<FullProductDto>(`${this.url}/${id}`);
    }

}