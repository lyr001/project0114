import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetecatComponent } from './setecat.component';

describe('SetecatComponent', () => {
  let component: SetecatComponent;
  let fixture: ComponentFixture<SetecatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetecatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetecatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
