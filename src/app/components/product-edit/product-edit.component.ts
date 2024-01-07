import { Component ,OnInit} from '@angular/core';
import  {ProductsService} from './../../services/products.service'
import {IProduct} from "./../../interfaces/product"
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent {
  product :IProduct|null=null

  constructor(private productService:ProductsService,private router:ActivatedRoute){
  }
  ngOnInit(){
    this.router.params.subscribe((params: Params): void => {
      this.productService.getProductByID(params['id']).subscribe((product)=>{
        this.product=product as IProduct
      });
    })
  }
}
