import {  FilterActionType } from '../actions/search.action';

 const initialState ={
    searchKey:'',
    category:'',
 }
export function SearchReducer(
  state = initialState,
  action: any
) {
  let newState
  switch (action.type) {
    case FilterActionType.FILTER_BY_CATERGORY:
      
          newState={searchKey:'',
                       category:action.payload}
        return newState 
    case FilterActionType.FILTER_BY_NAME:
      
          newState={searchKey:action.payload,
        category:''}
        return newState
    default:
      
        return state;
}
}
