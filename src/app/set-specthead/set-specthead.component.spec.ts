import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetSPECTheadComponent } from './set-specthead.component';

describe('SetSPECTheadComponent', () => {
  let component: SetSPECTheadComponent;
  let fixture: ComponentFixture<SetSPECTheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetSPECTheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetSPECTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
