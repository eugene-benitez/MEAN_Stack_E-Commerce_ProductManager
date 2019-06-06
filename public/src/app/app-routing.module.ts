import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './common/components/home/home.component';
import { CreateProductComponent } from './common/components/create-product/create-product.component';
import { EditProductComponent } from './common/components/edit-product/edit-product.component';
import { ProductListComponent } from './common/components/product-list/product-list.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
