import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProformaInvoicingComponent } from './proforma-invoicing.component';

describe('ProformaInvoicingComponent', () => {
  let component: ProformaInvoicingComponent;
  let fixture: ComponentFixture<ProformaInvoicingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProformaInvoicingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProformaInvoicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
