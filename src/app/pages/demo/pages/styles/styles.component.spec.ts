import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StylesComponent } from './styles.component';

describe('StylesComponent', () => {
  let component: StylesComponent;
  let fixture: ComponentFixture<StylesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
