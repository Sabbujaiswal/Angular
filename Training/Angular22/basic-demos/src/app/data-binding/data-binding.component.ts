import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
username='Sabbu';
employee={
  name:'Sahab',city:'Pune'
}
mylogo = '/assets/images/S&A.jpg'
isDisable=true
message = 'Have a great day'

//class binding
myclass='header';
newclass = 'footer'
applyClass=true;

//style binding
headerColor ='green'
headerText ='uppercase'
footerColor='orange'
applyStyle=false

//two way binding
studentname=''

greetmessage = ''
greet = (mname:string)=>{
this.greetmessage =`Welcome ${mname}`
}

showMessage = ()=>{
  this.message='Good day'
}
changeMess=()=>{
  this.message='Hello'
}
  constructor() { }

  ngOnInit(): void {
  }

}
