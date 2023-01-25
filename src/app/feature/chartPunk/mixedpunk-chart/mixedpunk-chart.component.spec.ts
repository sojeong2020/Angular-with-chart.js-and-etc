import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixedpunkChartComponent } from './mixedpunk-chart.component';

describe('MixedpunkChartComponent', () => {
  let component: MixedpunkChartComponent;
  let fixture: ComponentFixture<MixedpunkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixedpunkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixedpunkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
