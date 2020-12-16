import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaymentMethodsComponent } from './view-payment-methods.component';

describe('ViewPaymentMethodsComponent', () => {
  let component: ViewPaymentMethodsComponent;
  let fixture: ComponentFixture<ViewPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewPaymentMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
