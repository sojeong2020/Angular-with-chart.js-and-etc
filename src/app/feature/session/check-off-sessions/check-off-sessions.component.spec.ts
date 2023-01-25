import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckOffSessionsComponent } from './check-off-sessions.component';

describe('CheckOffSessionsComponent', () => {
  let component: CheckOffSessionsComponent;
  let fixture: ComponentFixture<CheckOffSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckOffSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckOffSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
