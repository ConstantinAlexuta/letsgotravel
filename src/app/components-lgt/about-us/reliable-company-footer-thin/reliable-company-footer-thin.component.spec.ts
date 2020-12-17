import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReliableCompanyFooterThinComponent } from './reliable-company-footer-thin.component';

describe('ReliableCompanyFooterThinComponent', () => {
  let component: ReliableCompanyFooterThinComponent;
  let fixture: ComponentFixture<ReliableCompanyFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReliableCompanyFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReliableCompanyFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
