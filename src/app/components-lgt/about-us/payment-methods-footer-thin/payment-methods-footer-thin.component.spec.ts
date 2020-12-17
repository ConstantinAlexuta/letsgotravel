import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsFooterThinComponent } from './payment-methods-footer-thin.component';

describe('PaymentMethodsFooterThinComponent', () => {
  let component: PaymentMethodsFooterThinComponent;
  let fixture: ComponentFixture<PaymentMethodsFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
