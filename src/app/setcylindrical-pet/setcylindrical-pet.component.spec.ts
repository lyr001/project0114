import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetcylindricalPETComponent } from './setcylindrical-pet.component';

describe('SetcylindricalPETComponent', () => {
  let component: SetcylindricalPETComponent;
  let fixture: ComponentFixture<SetcylindricalPETComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetcylindricalPETComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetcylindricalPETComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
