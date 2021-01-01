import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersIncludedServiceComponent } from './offers-included-service.component';

describe('OffersIncludedServiceComponent', () => {
  let component: OffersIncludedServiceComponent;
  let fixture: ComponentFixture<OffersIncludedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersIncludedServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersIncludedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
