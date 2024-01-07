import { Component ,OnInit} from '@angular/core';
import  {ProductsService} from './../../services/products.service'
import {IProduct} from "./../../interfaces/product"
import  {Router} from '@angular/router'


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{

 productsList :IProduct[]=[]

constructor(private productService:ProductsService,private router:Router){
}

ngOnInit(){
  this.productService.getProducts(30,0,'id,title,price,thumbnail,rating').subscribe((ProductsListObject)=>{
    this.productsList=ProductsListObject.products
  });

}

selectProduct(product:IProduct){
  this.router.navigate(['/edit',product.id])

}

}
