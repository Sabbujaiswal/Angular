import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-pipe-custom',
  templateUrl: './pipe-custom.component.html',
  styleUrls: ['./pipe-custom.component.css']
})
export class PipeCustomComponent implements OnInit {
message ='Great day';
username='Priya'
birthday=new Date('2021-01-01T12:10:10')

courses=[new Course('java',3000,'backend','online'),
new Course('Angular',13000,'frontend','offline','Sri'),
new Course('Node',2000,'backend','online'),
new Course('React',10000,'frontend','online'),
new Course('Spring',23000,'backend','offline','Priya'),
new Course('junit',4000,'testing','offline','Priya')]

choice=''
propertyName=''
  constructor() { }

  ngOnInit(): void {
  }

}
