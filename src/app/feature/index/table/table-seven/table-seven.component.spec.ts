import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSevenComponent } from './table-seven.component';

describe('TableSevenComponent', () => {
  let component: TableSevenComponent;
  let fixture: ComponentFixture<TableSevenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableSevenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
