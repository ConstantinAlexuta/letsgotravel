import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersServiceTypeFooterComponent } from './offers-service-type-footer.component';

describe('OffersServiceTypeFooterComponent', () => {
  let component: OffersServiceTypeFooterComponent;
  let fixture: ComponentFixture<OffersServiceTypeFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersServiceTypeFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersServiceTypeFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
