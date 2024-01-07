 import {IProduct} from './../../interfaces/product'
 export const ADD_PRODUCT = 'ADD_PRODUCT';



 export function CartReducer(
    state:IProduct[] =[],
    action:any
  ) {
    switch (action.type) {
        case ADD_PRODUCT:
            
            return [...state, action.payload];
        default:
            return state;
        }
  }

 
  