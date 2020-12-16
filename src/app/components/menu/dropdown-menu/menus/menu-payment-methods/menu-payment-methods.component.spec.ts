import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPaymentMethodsComponent } from './menu-payment-methods.component';

describe('MenuPaymentMethodsComponent', () => {
  let component: MenuPaymentMethodsComponent;
  let fixture: ComponentFixture<MenuPaymentMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuPaymentMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuPaymentMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
