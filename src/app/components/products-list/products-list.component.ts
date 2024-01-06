import { Component } from '@angular/core';
import  {ProductsService} from './../../services/products.service'
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
constructor(private productService:ProductsService){
  this.productService.getProducts(100);
}
}
