import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetOPETComponent } from './set-opet.component';

describe('SetOPETComponent', () => {
  let component: SetOPETComponent;
  let fixture: ComponentFixture<SetOPETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetOPETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetOPETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
