import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servises/product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {

  products:any[]=[];
  categories:any[]=[];
  

  constructor( private _ProductService:ProductService){}

  ngOnInit(): void { 

    this.getAllProdects();
    this.getAllCategories();
  }

  getAllProdects(){
    this._ProductService.getProducts().subscribe((res:any)=>{
      this.products=res;
    //console.log(res);
    },error =>{
      console.log(error)}
    )
  }

  getAllCategories(){
    this._ProductService.getCategories().subscribe((res:any)=>{
      this.categories=res;
      console.log(res);
    },error =>{
      console.log(error)}
    )
  }

  filter(event:any){
    let value = event.target.value
    if(value=="all"){
      this.getAllProdects();
    }else{
      this.specific(value);
    }
    
  }

  specific(e:any){
    this._ProductService.getCategoriesSpecific(e).subscribe((res:any)=>{
      this.products=res;
    //console.log(res);
    },error =>{
      console.log(error)}
    )
  }
  
}
