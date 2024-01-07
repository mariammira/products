import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import {IProduct} from "./../../interfaces/product"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems :IProduct[]=[];
  constructor(
    private store:Store<any>){
      this.store.subscribe(data=> {
        if(data.CartReducer) this.cartItems=data.CartReducer
      })
}
}
