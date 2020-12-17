import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersFooterThinComponent } from './offers-footer-thin.component';

describe('OffersFooterThinComponent', () => {
  let component: OffersFooterThinComponent;
  let fixture: ComponentFixture<OffersFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffersFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OffersFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
