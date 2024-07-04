import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servises/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {

  products:any[]=[];

  constructor( private _ProductService:ProductService){}

  ngOnInit(): void { 

    this.getAllProdects();
  }

  getAllProdects(){
    this._ProductService.getProducts().subscribe((res:any)=>{
      this.products=res;
    //console.log(res);
    })
  }
}
