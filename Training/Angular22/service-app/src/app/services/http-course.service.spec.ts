import { TestBed } from '@angular/core/testing';

import { HttpCourseService } from './http-course.service';

describe('HttpCourseService', () => {
  let service: HttpCourseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCourseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
