import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersPurchasedComponent } from './offers-purchased.component';

describe('OffersPurchasedComponent', () => {
  let component: OffersPurchasedComponent;
  let fixture: ComponentFixture<OffersPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
