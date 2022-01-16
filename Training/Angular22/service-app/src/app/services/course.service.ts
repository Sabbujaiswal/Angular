import { Injectable } from '@angular/core';
import { Course } from '../model/course';
//Decorator that marks a class 
//as available to be provided and injected as a dependency.
@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses=[new Course(6,'java',3000,'backend','online'),
  new Course(1,'Angular',13000,'frontend','offline','Sri'),
  new Course(2,'Node',2000,'backend','online'),
  new Course(3,'React',10000,'frontend','online'),
  new Course(4,'Spring',23000,'backend','offline','Priya'),
  new Course(5,'junit',4000,'testing','offline','Priya')]
  
  getCourse=()=>{
    return this.courses;
  }
  getById=(courseId:number):Course|undefined=>{
    let ncourse:Course|undefined
    this.courses.forEach(course=>{
      if(course.courseId==courseId)
     ncourse=course

    })
    return ncourse
  }

  constructor() { }
}
