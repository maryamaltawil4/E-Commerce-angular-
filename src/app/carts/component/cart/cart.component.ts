import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'] 
})
export class CartComponent implements OnInit {
  cartData: any[] = [];  
  data:any;
  total:number=0;

  ngOnInit(): void {
    this.loadCart(); 
    this.getTotalPrice();

  }

  loadCart() {
    const storedCart = localStorage.getItem("cart");
    this.cartData = storedCart ? JSON.parse(storedCart) : [];
    
  }

  deleteCart(id: any) {
   
    this.cartData = this.cartData.filter(item => item.id !== id);
    console.log(this.cartData)

    localStorage.setItem("cart", JSON.stringify(this.cartData));

    this.getTotalPrice();
  }

  getTotalPrice(){

    this.total= this.cartData.reduce((total, item) => total + (item.price * 1), 0);
  }
}
