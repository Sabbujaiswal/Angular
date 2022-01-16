import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-str-directives',
  templateUrl: './str-directives.component.html',
  styleUrls: ['./str-directives.component.css']
})
export class StrDirectivesComponent implements OnInit {
username = 'Sabbu'
empname='johny'
listStyle='none'
fruits= ['apple','strwberry','grapes','blueberry','kiwi','rasberry','orange']
  constructor() { }

  ngOnInit(): void {
  }

}
