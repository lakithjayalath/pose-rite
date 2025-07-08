import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RealTimeFeedbackComponent } from './real-time-feedback-system.component';

describe('RealTimeFeedbackComponent', () => {
  let component: RealTimeFeedbackComponent;
  let fixture: ComponentFixture<RealTimeFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealTimeFeedbackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealTimeFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
