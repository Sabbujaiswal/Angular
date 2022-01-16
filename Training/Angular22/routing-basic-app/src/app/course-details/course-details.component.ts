import { CourseService } from './../services/course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../models/course';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
// username='Priya'
  constructor(private _activatedRoute:ActivatedRoute,private _courseService:CourseService) { }

  courseId:number=0;
  ncourse:Course={courseId:0,courseName:'',cost:0,type:'',medium:''}
  ngOnInit(): void {
    // console.log('Rohan')
    // console.log("in course details")
    this._activatedRoute.paramMap.subscribe((map)=>{
      // pass the key to get the value .this is a string
      let cid =(map.get("id")) ;
      // convert it into an int value
      if(cid)
      this.courseId=parseInt(cid);
    });
      this._courseService.getCourses().subscribe({
        next:(courses)=>{
          courses.forEach((course)=>{
            if(course.courseId==this.courseId)
            this.ncourse=course;
          
        });
      },
      error:(error)=>console.log(error),
      complete:()=>console.log('completed'),
      
      
    });
  }

}
