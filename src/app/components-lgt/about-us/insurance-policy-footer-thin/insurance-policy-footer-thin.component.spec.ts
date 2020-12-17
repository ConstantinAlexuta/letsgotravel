import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurancePolicyFooterThinComponent } from './insurance-policy-footer-thin.component';

describe('InsurancePolicyFooterThinComponent', () => {
  let component: InsurancePolicyFooterThinComponent;
  let fixture: ComponentFixture<InsurancePolicyFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsurancePolicyFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsurancePolicyFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
