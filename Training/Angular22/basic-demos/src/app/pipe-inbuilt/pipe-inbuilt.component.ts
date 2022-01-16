import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-pipe-inbuilt',
  templateUrl: './pipe-inbuilt.component.html',
  styleUrls: ['./pipe-inbuilt.component.css']
})
export class PipeInbuiltComponent implements OnInit {
  joinDate:Date =new Date()
  //YYYY-MM-DDTHH:mm:ss.sssZ
employee = {
  name:'Sri',
  salary:10000,
  city:'Pune',
  birthday:'1998-02-24T20:10:00',
  bonus:2560.986788
}
message ='have a great year';

courses=[new Course('java',3000,'backend','online'),
new Course('Angular',13000,'frontend','offline','Sri'),
new Course('Node',2000,'backend','online'),
new Course('React',10000,'frontend','online'),
new Course('Spring',23000,'backend','offline','Priya'),
new Course('junit',4000,'testing','offline','Priya')]
gcolor='green';
  constructor() { }

  ngOnInit(): void {
  }

}
