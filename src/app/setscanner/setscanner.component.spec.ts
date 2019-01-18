import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetscannerComponent } from './setscanner.component';

describe('SetscannerComponent', () => {
  let component: SetscannerComponent;
  let fixture: ComponentFixture<SetscannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetscannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetscannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
