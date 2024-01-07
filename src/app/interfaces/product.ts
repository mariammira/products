export interface IProduct {
  id:number,
  title:string
  price:number
  rating:number
  thumbnail:string
  images?:string[]
  description?:string

}


export interface IproductListObject{
    limit:number,
    skip:number,
    total:number,
    products:IProduct[]
}
