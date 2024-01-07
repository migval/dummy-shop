import { Component, Input, OnInit } from "@angular/core";
import { CustomProductDto } from "../../services/dtos/product.dto";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    @Input() product!: CustomProductDto;

    constructor() { }

    ngOnInit() {
        if (!this.product) {
            throw new Error('Product is required');
        }
    }
}