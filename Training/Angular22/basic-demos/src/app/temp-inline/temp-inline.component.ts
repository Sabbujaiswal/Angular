import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-inline',
  template: `<html>
  <body> 
<h3>{{message}}</h3>
<h2 [class]="myclass">{{message}}</h2>
<h2 [class]="newclass">{{message}}</h2>
<h2 [class]="applyClass?myclass:newclass">{{message}}</h2>
<h2 [class]="!applyClass?myclass:newclass">{{message}}</h2>
<h2 [class]="!applyClass?'header-style':'footer-style'">{{message}}</h2>
<h1 [style.color]="applyClass?'blue':'red'">{{message}}</h1>
<h1 [style.color]="!applyClass?'blue':'red'">{{message}}</h1>
  </body>
</html>`,


  styles: [
`.header-style{
color:green;
text-transform:uppercase;
}
.footer-style{
  color:orange;
  letter-spacing:3px
}

`
  ]
})
export class TempInlineComponent implements OnInit {

message='Have a great Day';
myclass='header-style'
newclass='footer-style'
applyClass=false
  constructor() { }

  ngOnInit(): void {
  }

}

///when i have only one line code then without using html file we can use template in bactick then write code ..........Also we can do the same thing in style..