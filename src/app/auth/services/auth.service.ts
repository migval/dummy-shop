import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { environment } from "src/environments/environment";
import { UserDto } from "./dtos/user.dto";
import { UserService } from "./user.service";
import { FavouriteProductsService } from "src/app/products/services/favourite-products.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient, private userService: UserService, private favSrv: FavouriteProductsService) { }

    login(username: string, password: string): Observable<UserDto> {
        return this.http.post<UserDto>(`${environment.apiUrl}/auth/login`, { username, password }).pipe(
            tap(user => this.userService.setUser(user))
        );
    }

    logout(): void {
        this.userService.setUser(null);
        this.favSrv.clearFavourites();
    }
}