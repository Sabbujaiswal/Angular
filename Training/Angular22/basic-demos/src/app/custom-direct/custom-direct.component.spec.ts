import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDirectComponent } from './custom-direct.component';

describe('CustomDirectComponent', () => {
  let component: CustomDirectComponent;
  let fixture: ComponentFixture<CustomDirectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDirectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDirectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
