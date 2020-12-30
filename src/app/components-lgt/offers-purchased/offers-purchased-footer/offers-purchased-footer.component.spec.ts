import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPurchasedFooterComponent } from './offers-purchased-footer.component';

describe('OffersPurchasedFooterComponent', () => {
  let component: OffersPurchasedFooterComponent;
  let fixture: ComponentFixture<OffersPurchasedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersPurchasedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersPurchasedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
