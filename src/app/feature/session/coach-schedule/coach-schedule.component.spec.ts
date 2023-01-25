import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachScheduleComponent } from './coach-schedule.component';

describe('CoachScheduleComponent', () => {
  let component: CoachScheduleComponent;
  let fixture: ComponentFixture<CoachScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoachScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
