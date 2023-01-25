import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarpunkChartComponent } from './barpunk-chart.component';

describe('BarpunkChartComponent', () => {
  let component: BarpunkChartComponent;
  let fixture: ComponentFixture<BarpunkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarpunkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarpunkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
