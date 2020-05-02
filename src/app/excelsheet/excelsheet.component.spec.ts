import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelsheetComponent } from './excelsheet.component';

describe('ExcelsheetComponent', () => {
  let component: ExcelsheetComponent;
  let fixture: ComponentFixture<ExcelsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
