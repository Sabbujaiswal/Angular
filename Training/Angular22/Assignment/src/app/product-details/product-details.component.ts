import { Product } from './../model/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
datestring:any='2022-01-22T00:10:20'
productsInCart:Product[]=[]
propertyName=''
choice=''
products =[
  new Product("SSK5","Nokia",16000,"electronics",1),
  new Product("Butter","Amul",500,"groceries",3,4.5,this.datestring),
  new Product("Earbuds","Apple",15000,"gadgets",2,4),
  new Product("Keyboard","Dell",1300,"electronics",5,3.5),
]
addToCart=(product:Product)=>{
  this.productsInCart.push(product);
}
  constructor() { }

  ngOnInit(): void {
  }

}
