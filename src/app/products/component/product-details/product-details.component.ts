import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../servises/product.service';
import { error } from 'console';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {

  id:any;
  data:any={};

  constructor(private _ActivatedRoute: ActivatedRoute ,private _ProductService:ProductService){

  this.id=this._ActivatedRoute.snapshot.paramMap.get("id");

  console.log(this.id);
  }

  
  ngOnInit(): void {
    this.getData();
  }



  getData(){
  
    this._ProductService.getOneProduct(this.id).subscribe((res:any)=>{
      this.data =res;
      console.log(this.data)
    },error =>{
      console.log(error)}
    )
  }

}