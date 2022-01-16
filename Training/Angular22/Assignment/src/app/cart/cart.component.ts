import { Product } from './../model/product';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
@Input()cartDetails:Product[]=[];
  constructor() { }

  ngOnInit(): void {
  }

}
