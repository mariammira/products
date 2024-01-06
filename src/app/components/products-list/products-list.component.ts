import { Component ,OnInit} from '@angular/core';
import  {ProductsService} from './../../services/products.service'
import {IProduct} from "./../../interfaces/product"

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

 productsList :IProduct[]=[]

constructor(private productService:ProductsService){
}

ngOnInit(){
  this.productService.getProducts().subscribe((ProductsListObject)=>{
    this.productsList=ProductsListObject.products
  });

}
}
