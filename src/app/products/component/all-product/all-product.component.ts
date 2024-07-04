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
  loader:boolean=true ; 
  

  constructor( private _ProductService:ProductService){}

  ngOnInit(): void { 

    this.getAllProdects();
    this.getAllCategories();
  }

  getAllProdects(){
    this.loader=true ; 
    this._ProductService.getProducts().subscribe((res:any)=>{
      this.products=res;
      this.loader=false ; 
    //console.log(res);
    },error =>{
      console.log(error)}
    )
  }

  getAllCategories(){
    this.loader=true ; 
    this._ProductService.getCategories().subscribe((res:any)=>{
      this.categories=res;
      this.loader=false ; 
      console.log(res);
    },error =>{
      console.log(error)}
    )
  }

  // to decide 
  filter(event:any){
    this.loader=true ; 
    let value = event.target.value
    if(value=="all"){
      this.loader=false; 
      this.getAllProdects();
    }else{
      this.loader=false; 
      this.specific(value);
    }
    
  }
 
  // to show 
  specific(e:any){
    this.loader=true ; 
    this._ProductService.getCategoriesSpecific(e).subscribe((res:any)=>{
      this.products=res;
      this.loader=false; 
    //console.log(res);
    },error =>{
      console.log(error)}
    )
  }
  
}
