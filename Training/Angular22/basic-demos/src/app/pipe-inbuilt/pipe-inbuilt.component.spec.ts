import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeInbuiltComponent } from './pipe-inbuilt.component';

describe('PipeInbuiltComponent', () => {
  let component: PipeInbuiltComponent;
  let fixture: ComponentFixture<PipeInbuiltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeInbuiltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeInbuiltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
