import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './auth/pages/login/login-page.component';
import { LayoutComponent } from './layout/layout.component';
import { loggedInGuard } from './auth/guards/logged-in.guard';

const routes: Routes = [
  { path: '', canActivate: [loggedInGuard], component: LayoutComponent, loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: 'login', component: LoginPageComponent},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
