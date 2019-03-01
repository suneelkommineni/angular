import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApisintegrationComponent } from './apisintegration.component';

describe('ApisintegrationComponent', () => {
  let component: ApisintegrationComponent;
  let fixture: ComponentFixture<ApisintegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApisintegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApisintegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
