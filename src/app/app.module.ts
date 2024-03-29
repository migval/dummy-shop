import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './auth/pages/login/login-page.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './layout/layout.component';
import { tokenInterceptorProvider } from './auth/interceptors/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    tokenInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
