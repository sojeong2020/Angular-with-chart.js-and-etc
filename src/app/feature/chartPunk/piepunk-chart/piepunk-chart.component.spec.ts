import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiepunkChartComponent } from './piepunk-chart.component';

describe('PiepunkChartComponent', () => {
  let component: PiepunkChartComponent;
  let fixture: ComponentFixture<PiepunkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiepunkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PiepunkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
