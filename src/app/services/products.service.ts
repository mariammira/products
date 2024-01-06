import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {IproductListObject} from './../interfaces/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(limit?:number,skip?:number,select?:string):Observable<IproductListObject>{
    
    let url=`https://dummyjson.com/products`;

    if(arguments.length)url+='?'
    if(limit) url+=`limit=${limit}&`
    if(skip)  url+= `skip=${skip}&`
    if(select)url +=  `select=${select}`

    return this.http.get(url) as Observable<IproductListObject>;
  }

  getProductByID(id:number){
    return this.http.get(`https://dummyjson.com/products/${id}`);

  }

  searchProducts(key:string){
    return this.http.get(`https://dummyjson.com/products/search?q=${key}`)


  }

  getProductsByCategory(category:string){
    return this.http.get(`https://dummyjson.com/products/category/${category}`)

  }

  getAllProductsCategories(){
    return this.http.get('https://dummyjson.com/products/categories')
  }

}
