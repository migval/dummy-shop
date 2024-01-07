import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPageComponent } from "./pages/dashboard-page/dashboard-page.component";
import { FavouritesPageComponent } from "./pages/favourites-page/favourites-page.component";

const routes: Routes = [
    { path: '', component: DashboardPageComponent},
    { path: 'favourites', component: FavouritesPageComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
}