import { HttpCourseService } from './../services/http-course.service';
import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

   courses:Course[]=[];

  // constructor(private _courseService:CourseService) { }

constructor(private _courseService:HttpCourseService){}

  ngOnInit(): void {

    this._courseService.getCourses().subscribe({

      next:(data)=>(this.courses=data),
      error:(error)=>console.log(error),
      complete:()=>console.log("completed")

    });
    
  }
}
