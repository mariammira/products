import { Component ,OnInit} from '@angular/core';
import  {ProductsService} from './../../services/products.service';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  categoriesList:string[]=[]
  
  constructor(private productService:ProductsService,private store:Store<any>){

  }

  ngOnInit(): void {
    this.productService.getAllProductsCategories().subscribe((categories)=>{
      this.categoriesList=categories as string[]
    })
  }

  changeCategory(category:string){
    this.store.dispatch({
      type: 'FILTER_BY_CATERGORY',
      payload: category
    });
  }
}
