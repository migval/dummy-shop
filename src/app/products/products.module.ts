import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
    declarations: [
        DashboardPageComponent,
        ProductComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule
    ],
    exports: [],
    providers: [],
})
export class ProductsModule {
}