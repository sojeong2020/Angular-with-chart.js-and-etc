import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingBookingsComponent } from './ending-bookings.component';

describe('EndingBookingsComponent', () => {
  let component: EndingBookingsComponent;
  let fixture: ComponentFixture<EndingBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EndingBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
