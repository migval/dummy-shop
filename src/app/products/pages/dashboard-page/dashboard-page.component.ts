import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { CustomProductDto } from "../../services/dtos/product.dto";

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

    public products: CustomProductDto[] = [];

    constructor(private productsSrv: ProductsService) { }

    ngOnInit() {
        this.productsSrv.fetchProducts<CustomProductDto>(0, 10, ['thumbnail', 'title', 'description', 'price'])
        .subscribe((response) => {
            this.products = response.products;
        });
    }
}