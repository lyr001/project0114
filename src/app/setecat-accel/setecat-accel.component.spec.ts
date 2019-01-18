import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetecatAccelComponent } from './setecat-accel.component';

describe('SetecatAccelComponent', () => {
  let component: SetecatAccelComponent;
  let fixture: ComponentFixture<SetecatAccelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetecatAccelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetecatAccelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
