import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsFooterComponent } from './payment-methods-footer.component';

describe('PaymentMethodsFooterComponent', () => {
  let component: PaymentMethodsFooterComponent;
  let fixture: ComponentFixture<PaymentMethodsFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
