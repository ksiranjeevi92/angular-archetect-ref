import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CheckboxesComponent } from './checkboxes.component';

describe('CheckboxesComponent', () => {
  let component: CheckboxesComponent;
  let fixture: ComponentFixture<CheckboxesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckboxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
