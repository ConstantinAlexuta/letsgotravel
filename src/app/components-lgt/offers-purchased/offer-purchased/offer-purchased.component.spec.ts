import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPurchasedComponent } from './offer-purchased.component';

describe('OfferPurchasedComponent', () => {
  let component: OfferPurchasedComponent;
  let fixture: ComponentFixture<OfferPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
