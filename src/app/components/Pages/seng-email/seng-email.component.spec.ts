import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SengEmailComponent } from './seng-email.component';

describe('SengEmailComponent', () => {
  let component: SengEmailComponent;
  let fixture: ComponentFixture<SengEmailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SengEmailComponent]
    });
    fixture = TestBed.createComponent(SengEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
