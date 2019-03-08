import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentcourseComponent } from './parentcourse.component';

describe('ParentcourseComponent', () => {
  let component: ParentcourseComponent;
  let fixture: ComponentFixture<ParentcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
