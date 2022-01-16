import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';


@Component({
  selector: 'app-str-direct',
  templateUrl: './str-direct.component.html',
  styleUrls: ['./str-direct.component.css']
})
export class StrDirectComponent implements OnInit {
  gcolor='green'
courses=[new Course('java',3000,'backend','online'),
new Course('Angular',13000,'frontend','offline','Sri'),
new Course('Node',2000,'backend','online'),
new Course('React',10000,'frontend','online'),
new Course('Spring',23000,'backend','offline','Priya'),
new Course('junit',4000,'testing','offline','Priya')]

  constructor() {}

  ngOnInit(): void {
  }

}
