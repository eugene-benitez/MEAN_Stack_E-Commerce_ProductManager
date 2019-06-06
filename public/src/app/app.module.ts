import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './common/components/home/home.component';
import { ProductListComponent } from './common/components/product-list/product-list.component';
import { EditProductComponent } from './common/components/edit-product/edit-product.component';
import { CreateProductComponent } from './common/components/create-product/create-product.component';
import { HttpService } from './common/services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    EditProductComponent,
    CreateProductComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
