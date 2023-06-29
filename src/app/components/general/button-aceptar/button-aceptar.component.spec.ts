import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAceptarComponent } from './button-aceptar.component';

describe('ButtonAceptarComponent', () => {
  let component: ButtonAceptarComponent;
  let fixture: ComponentFixture<ButtonAceptarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonAceptarComponent]
    });
    fixture = TestBed.createComponent(ButtonAceptarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
