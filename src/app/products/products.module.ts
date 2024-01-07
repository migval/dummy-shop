import { NgModule } from "@angular/core";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { CommonModule } from "@angular/common";
import { ProductComponent } from "./components/product/product.component";
import { FavouriteButtonComponent } from "./components/favourite-button/favourite-button.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";

@NgModule({
    declarations: [
        DashboardPageComponent,
        FavouritesPageComponent,

        ProductComponent,
        FavouriteButtonComponent
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