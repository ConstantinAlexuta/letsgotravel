import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferPurchasedFooterComponent } from './offer-purchased-footer.component';

describe('OfferPurchasedFooterComponent', () => {
  let component: OfferPurchasedFooterComponent;
  let fixture: ComponentFixture<OfferPurchasedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferPurchasedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferPurchasedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
