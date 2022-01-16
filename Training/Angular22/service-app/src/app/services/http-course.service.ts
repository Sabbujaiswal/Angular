import { Course } from './../../../../basic-demos/src/app/model/course';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpCourseService {
  
private _url="/assets/courses.json";

  constructor(private http:HttpClient) { }

  getCourses=():Observable<Course[]>=>{

    return this.http.get<Course[]>(this._url)
  }
}
