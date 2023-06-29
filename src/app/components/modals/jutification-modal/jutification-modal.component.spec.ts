import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JutificationModalComponent } from './jutification-modal.component';

describe('JutificationModalComponent', () => {
  let component: JutificationModalComponent;
  let fixture: ComponentFixture<JutificationModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JutificationModalComponent]
    });
    fixture = TestBed.createComponent(JutificationModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
