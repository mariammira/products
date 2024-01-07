import { Component } from '@angular/core';
import  {ProductsService} from './../../services/products.service'
import {IProduct} from "./../../interfaces/product"
import  {Router} from '@angular/router'
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {

 productsList :IProduct[]=[]

constructor(private productService:ProductsService,
            private router:Router,
            private store:Store<any>){

   this.store.subscribe(data=>{
    
    let api
    if(data.search.searchKey) api=this.productService.searchProducts(data.search.searchKey)
    else if (data.search.category) api=this.productService.getProductsByCategory(data.search.category)
    else api =this.productService.getProducts(30,0,'id,title,price,thumbnail,rating')
     
    this.getProductsList(api);
  })
}

selectProduct(product:IProduct){
  this.router.navigate(['/edit',product.id])

}

getProductsList(url:any){
  
  url.subscribe((ProductsListObject:any)=>{
    this.productsList=ProductsListObject.products
  });
}

}
