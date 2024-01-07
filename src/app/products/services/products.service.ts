import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, switchMap, take } from "rxjs";
import { UserService } from "src/app/auth/services/user.service";
import { environment } from "src/environments/environment";
import { ProductsResponse } from "./dtos/products-response";

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

        return this.userSrv.user$.pipe(
            take(1),
            switchMap(user => {
                if (!user) {
                    throw new Error('Not authenticated user')
                }

                const headers = { Authorization: `Bearer ${user.token}` };
                return this.http.get<ProductsResponse<T>>(request, { headers });
            }
        ));
    }

}