import { HttpCourseService } from './../services/http-course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from '../model/course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit {
  ncourse: Course | undefined;

  constructor(
    private _courseService: CourseService,
    private _httpCourseService: HttpCourseService
  ) {}

  ngOnInit(): void {}
  showCourse = (id: string) => {
    let courseId = parseInt(id);
    let course = this._courseService.getById(courseId);
    this.ncourse = course;
  };
  showJSONCourse = (id: string) => {
    let courseId = parseInt(id);
    this._httpCourseService.getCourses().subscribe({
      next: (coursesList) => {
        coursesList.forEach((course) => {
          if (course.courseId == courseId) this.ncourse = course;
        });
      },
    });
  };
}
