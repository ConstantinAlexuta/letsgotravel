import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersIncludedServiceFooterComponent } from './offers-included-service-footer.component';

describe('OffersIncludedServiceFooterComponent', () => {
  let component: OffersIncludedServiceFooterComponent;
  let fixture: ComponentFixture<OffersIncludedServiceFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersIncludedServiceFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersIncludedServiceFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
