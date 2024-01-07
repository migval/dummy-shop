import { Component, OnInit } from "@angular/core";
import { FavouriteProductsService } from "../../services/favourite-products.service";
import { CustomProductDto } from "../../services/dtos/product.dto";
import { take } from "rxjs";

@Component({
    selector: 'app-favourites-page',
    templateUrl: './favourites-page.component.html',
    styleUrls: ['./favourites-page.component.scss']
})
export class FavouritesPageComponent implements OnInit {

    public favouriteProduct: CustomProductDto[] = [];

    constructor(private favSrv: FavouriteProductsService) { }

    ngOnInit() {
        this.favSrv.favouriteProducts$.pipe(
            take(1)
        ).subscribe((products) => {
            this.favouriteProduct = products;
        });
    }
}