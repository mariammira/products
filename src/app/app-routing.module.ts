import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes , RouterModule} from '@angular/router'

import {ProductsListComponent} from './components/products-list/products-list.component'
import {ProductEditComponent}from'./components/product-edit/product-edit.component';

const appRoutes :Routes =[
  {path:'',component:ProductsListComponent},
  {path:'edit/:id',component:ProductEditComponent},
  ]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
    exports: [RouterModule]

})
export class AppRoutingModule { }

