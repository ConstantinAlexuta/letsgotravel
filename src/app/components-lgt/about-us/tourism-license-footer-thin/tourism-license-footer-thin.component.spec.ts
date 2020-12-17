import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourismLicenseFooterThinComponent } from './tourism-license-footer-thin.component';

describe('TourismLicenseFooterThinComponent', () => {
  let component: TourismLicenseFooterThinComponent;
  let fixture: ComponentFixture<TourismLicenseFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TourismLicenseFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TourismLicenseFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
