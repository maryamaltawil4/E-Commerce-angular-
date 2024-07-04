import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './cards/component/card/card.component';
import { ProductsModule } from './products/products.module';
import { AllProductComponent } from './products/component/all-product/all-product.component';

const routes: Routes = [
  {path:"", pathMatch:"full" ,redirectTo:"products"},
  {path:"card",component:CardComponent},
  {path:"products",component:AllProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
