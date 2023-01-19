import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinepunkChartComponent } from './linepunk-chart.component';

describe('LinepunkChartComponent', () => {
  let component: LinepunkChartComponent;
  let fixture: ComponentFixture<LinepunkChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinepunkChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinepunkChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
