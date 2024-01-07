import { Component, Input, OnInit } from "@angular/core";
import { CustomProductDto } from "../../services/dtos/product.dto";
import { FavouriteProductsService } from "../../services/favourite-products.service";
import { Observable } from "rxjs";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product!: CustomProductDto;

    constructor(public favSrv: FavouriteProductsService) { }

    ngOnInit() {
        if (!this.product) {
            throw new Error('Product is required');
        }
    }

    public setFavourite(isFavourite: boolean) {
        if (isFavourite) {
            this.favSrv.setProductAsFavourite(this.product);
        } else {
            this.favSrv.removeProductFromFavourites(this.product.id);
        }
    }
}