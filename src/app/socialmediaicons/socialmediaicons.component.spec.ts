import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaiconsComponent } from './socialmediaicons.component';

describe('SocialmediaiconsComponent', () => {
  let component: SocialmediaiconsComponent;
  let fixture: ComponentFixture<SocialmediaiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
