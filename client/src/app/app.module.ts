import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { NewproductComponent } from './components/newproduct/newproduct.component';
import { FormsModule } from '@angular/forms';
import { ComponentsComponent } from './login/components/components.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
    HeaderComponent,
    HomeComponent,
    NewproductComponent,
    ComponentsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
