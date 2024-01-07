import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    searchBy:string=''
    cartItems:number=0
    constructor(
      private store:Store<any>){
        this.store.subscribe(data=> {
          if(!data.search.searchKey)this.searchBy=''
          if(data.CartReducer) this.cartItems=data.CartReducer.length
        })
}
    changeFilterBy(target:any){
      
        this.store.dispatch({
          type: 'FILTER_BY_NAME',
          payload: target.value
        });
      
    }
}
