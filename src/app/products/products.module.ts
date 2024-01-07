import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ProductsRoutingModule } from "./products-routing.module";

@NgModule({
    declarations: [
        DashboardPageComponent
    ],
    imports: [ProductsRoutingModule],
    exports: [],
    providers: [],
})
export class ProductsModule {
}