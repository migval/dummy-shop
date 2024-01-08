import { Component, HostListener, OnInit } from "@angular/core";
import { ProductsService } from "../../services/products.service";
import { CustomProductDto } from "../../services/dtos/product.dto";

@Component({
    selector: 'app-dashboard-page',
    templateUrl: './dashboard-page.component.html',
    styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

    @HostListener('window:scroll', ['$event']) onScrollEvent(event: Event) {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body, html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.scrollY;
        if (windowBottom >= (docHeight - 20)) {
            if (this.products.length < this.total && !this.loading) {
                this.page++;
                this.fetchPage(this.page);
            }
        }
    }

    public products: CustomProductDto[] = [];
    public loading: boolean = false;
    private total: number = 0;
    private page: number = 0;

    constructor(private productsSrv: ProductsService) { }

    ngOnInit() {
        this.productsSrv.fetchProducts<CustomProductDto>(0, 10, ['thumbnail', 'title', 'description', 'price'])
        .subscribe((response) => {
            this.products = response.products;
            this.total = response.total;
        });
    }

    public fetchPage(page: number): void {
        this.loading = true;
        this.productsSrv.fetchProducts<CustomProductDto>(page, 10, ['thumbnail', 'title', 'description', 'price'])
        .subscribe((response) => {
            this.products = this.products.concat(response.products);
            this.loading = false;
        });
    }

    public onScroll(event: Event) {
        console.log(event);
    }
}