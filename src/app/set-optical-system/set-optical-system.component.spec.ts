import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOpticalSystemComponent } from './set-optical-system.component';

describe('SetOpticalSystemComponent', () => {
  let component: SetOpticalSystemComponent;
  let fixture: ComponentFixture<SetOpticalSystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOpticalSystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOpticalSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
