import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOfferToPurchasedComponent } from './add-offer-to-purchased.component';

describe('AddOfferToPurchasedComponent', () => {
  let component: AddOfferToPurchasedComponent;
  let fixture: ComponentFixture<AddOfferToPurchasedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOfferToPurchasedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOfferToPurchasedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
