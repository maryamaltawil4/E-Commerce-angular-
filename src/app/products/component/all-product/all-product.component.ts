import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../servises/product.service';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrl: './all-product.component.css'
})
export class AllProductComponent implements OnInit {

  products:any[]=[];
  categories:any[]=[];
  loader:boolean=true ; 
  selectedCategory: string = 'all';
  cardsAdd :any[]=[];

  

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
  filter(event: any) {
    const selectedCategory = event.target.value;
    console.log(selectedCategory);
    if (selectedCategory === 'all') {
      this.getAllProdects();
    } else {
      this.specific( selectedCategory );
    }
  }
  // to show 
  specific(e:any){
    this.loader=true ; 
    this._ProductService.getCategoriesSpecific(e).subscribe((res:any)=>{
      this.products=res;
      this.loader=false; 
    },error =>{
      console.log(error)}
    )
  }

  addCart(event: any){
    if ("cart" in localStorage) {
      this.cardsAdd = JSON.parse(localStorage.getItem("cart")!);
      let exist = this.cardsAdd.find(item => item.id == event.id);
      if (exist) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'This item is already added to the cart!'
        });
      } else {
        this.cardsAdd.push(event);
        localStorage.setItem("cart", JSON.stringify(this.cardsAdd));
        Swal.fire({
          icon: 'success',
          title: 'Added!',
          text: 'Your item has been added to the cart.'
        });
      }
    } else {
      this.cardsAdd.push(event);
      localStorage.setItem("cart", JSON.stringify(this.cardsAdd));
      Swal.fire({
        icon: 'success',
        title: 'Added!',
        text: 'Your item has been added to the cart.'
      });
    }
  }
}
  

