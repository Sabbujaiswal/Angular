import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() parentOne =''
@Input() parentTwo =''
@Input() parentThree=''
@Output() childEventOne = new EventEmitter<string>();
@Output() childEventTwo = new EventEmitter<string>();

showMessage=()=>{
this.childEventOne.emit('Have a great Day')
}
greetChild=(cname:string)=>{
this.childEventTwo.emit(`Welcome ${cname}`)
}
  constructor() { }

  ngOnInit(): void {
  }

}
