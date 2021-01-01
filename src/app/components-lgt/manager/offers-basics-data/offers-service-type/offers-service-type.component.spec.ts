import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersServiceTypeComponent } from './offers-service-type.component';

describe('OffersServiceTypeComponent', () => {
  let component: OffersServiceTypeComponent;
  let fixture: ComponentFixture<OffersServiceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersServiceTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersServiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
