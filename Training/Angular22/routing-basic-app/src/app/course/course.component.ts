import { CourseService } from '../services/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  courses: Course[] | undefined = [];

  constructor(private _courseService:CourseService,private _router:Router) { }

  ngOnInit(): void {
   
    this._courseService.getCourses().subscribe({

      next:(data: Course[] | undefined)=>(this.courses=data),
      error:(error: any)=>console.log(error),
      complete:()=>console.log("completed")

    });
  }
  onSubmit=(course:Course)=>{
    console.log(course);
    // first parameter is the path ,2nd one is the extract the id
    // match this   path course-details/:id
    this._router.navigate(["/course-details",course.courseId])
  }

}
