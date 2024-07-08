import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductsModule } from './products/products.module';
import { AllProductComponent } from './products/component/all-product/all-product.component';
import { ProductDetailsComponent } from './products/component/product-details/product-details.component';
import { CartComponent } from './carts/component/cart/cart.component';

const routes: Routes = [
  {path:"", pathMatch:"full" ,redirectTo:"products"},
  {path:"cart",component:CartComponent},
  {path:"products",component:AllProductComponent},
  {path :"detail/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
