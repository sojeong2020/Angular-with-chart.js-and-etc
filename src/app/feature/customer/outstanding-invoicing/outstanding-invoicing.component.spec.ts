import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutstandingInvoicingComponent } from './outstanding-invoicing.component';

describe('OutstandingInvoicingComponent', () => {
  let component: OutstandingInvoicingComponent;
  let fixture: ComponentFixture<OutstandingInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutstandingInvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OutstandingInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
