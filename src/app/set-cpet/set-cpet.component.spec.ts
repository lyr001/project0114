import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCPETComponent } from './set-cpet.component';

describe('SetCPETComponent', () => {
  let component: SetCPETComponent;
  let fixture: ComponentFixture<SetCPETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCPETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCPETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
