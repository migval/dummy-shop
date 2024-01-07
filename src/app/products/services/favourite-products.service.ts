import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, map } from "rxjs";
import { CustomProductDto } from "./dtos/product.dto";

@Injectable({
    providedIn: 'root'
})
export class FavouriteProductsService {
    private _favouriteProducts$ = new BehaviorSubject<CustomProductDto[]>([]);
    public favouriteProducts$ = this._favouriteProducts$.asObservable(); 

    constructor() {
        const favouriteProducts = localStorage.getItem('favouriteProducts');
        if (favouriteProducts) {
            this._favouriteProducts$.next(JSON.parse(favouriteProducts));
        } else {
            localStorage.setItem('favouriteProducts', JSON.stringify([]));
            this._favouriteProducts$.next([]);
        }
    }

    setProductAsFavourite(product: CustomProductDto): void {
        if (this.isFavourite(product.id)) {
            return;
        }
        const favouriteProducts = this._favouriteProducts$.getValue();
        favouriteProducts.push(product);
        localStorage.setItem('favouriteProducts', JSON.stringify(favouriteProducts));
        this._favouriteProducts$.next(favouriteProducts);
    }

    removeProductFromFavourites(productId: number): void {
        const favouriteProducts = this._favouriteProducts$.getValue();
        const newFavouriteProducts = favouriteProducts.filter(product => product.id !== productId);
        localStorage.setItem('favouriteProducts', JSON.stringify(newFavouriteProducts));
        this._favouriteProducts$.next(newFavouriteProducts);
    }

    isFavourite$(productId: number): Observable<boolean> {
        return this._favouriteProducts$.pipe(
            map(favouriteProducts => favouriteProducts.some(product => product.id === productId))
        );
    }

    public isFavourite(productId: number): boolean {
        return this._favouriteProducts$.getValue().some(product => product.id === productId);
    }
}