import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferToPurchasedFooterComponent } from './add-offer-to-purchased-footer.component';

describe('AddOfferToPurchasedFooterComponent', () => {
  let component: AddOfferToPurchasedFooterComponent;
  let fixture: ComponentFixture<AddOfferToPurchasedFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferToPurchasedFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferToPurchasedFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
