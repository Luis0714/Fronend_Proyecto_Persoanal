import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSingOutComponent } from './home-sing-out.component';

describe('HomeSingOutComponent', () => {
  let component: HomeSingOutComponent;
  let fixture: ComponentFixture<HomeSingOutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeSingOutComponent]
    });
    fixture = TestBed.createComponent(HomeSingOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
