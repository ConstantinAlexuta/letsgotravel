import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodsMenuComponent } from './payment-methods-menu.component';

describe('PaymentMethodsMenuComponent', () => {
  let component: PaymentMethodsMenuComponent;
  let fixture: ComponentFixture<PaymentMethodsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentMethodsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
