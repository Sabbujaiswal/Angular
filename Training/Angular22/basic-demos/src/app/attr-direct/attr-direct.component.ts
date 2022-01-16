import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-direct',
  templateUrl: './attr-direct.component.html',
  styleUrls: ['./attr-direct.component.css']
})
export class AttrDirectComponent implements OnInit {
username='Sabbu'
city='pune'
fruits= ['apple','strwberry','grapes','blueberry','kiwi','rasberry','orange']
  constructor() { }

  ngOnInit(): void {
  }

}
