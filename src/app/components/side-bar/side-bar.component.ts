import { Component ,OnInit} from '@angular/core';
import  {ProductsService} from './../../services/products.service'

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  categoriesList:string[]=[]
  
  constructor(private productService:ProductsService){

  }

  ngOnInit(): void {
    this.productService.getAllProductsCategories().subscribe((categories)=>{
      this.categoriesList=categories as string[]
    })
  }
}
