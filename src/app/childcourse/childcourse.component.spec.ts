import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcourseComponent } from './childcourse.component';

describe('ChildcourseComponent', () => {
  let component: ChildcourseComponent;
  let fixture: ComponentFixture<ChildcourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
