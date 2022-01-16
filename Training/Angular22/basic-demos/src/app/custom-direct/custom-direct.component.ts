import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-direct',
  templateUrl: './custom-direct.component.html',
  styleUrls: ['./custom-direct.component.css']
})
export class CustomDirectComponent implements OnInit {
  username = 'Priya'

  constructor() { }

  ngOnInit(): void {
    // console.log(this.username);
    // console.log('Inside OnInit')
    // this.username='Rohan'
    // what ever we write in onInit it takes that value automatically.....
  }

}
