import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersViewAllListedPrimeNgComponent } from './offers-view-all-listed-prime-ng.component';

describe('OffersViewAllListedPrimeNgComponent', () => {
  let component: OffersViewAllListedPrimeNgComponent;
  let fixture: ComponentFixture<OffersViewAllListedPrimeNgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersViewAllListedPrimeNgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersViewAllListedPrimeNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
