import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { AllProductComponent } from './component/all-product/all-product.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    AllProductComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule
  ]
})
export class ProductsModule { }
