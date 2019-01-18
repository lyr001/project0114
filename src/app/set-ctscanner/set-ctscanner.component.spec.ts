import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetCTscannerComponent } from './set-ctscanner.component';

describe('SetCTscannerComponent', () => {
  let component: SetCTscannerComponent;
  let fixture: ComponentFixture<SetCTscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetCTscannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetCTscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
