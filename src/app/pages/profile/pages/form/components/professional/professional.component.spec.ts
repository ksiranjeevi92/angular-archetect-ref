import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProfessionalComponent } from './professional.component';

describe('ProfessionalComponent', () => {
  let component: ProfessionalComponent;
  let fixture: ComponentFixture<ProfessionalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
