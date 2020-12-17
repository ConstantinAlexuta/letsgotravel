import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegistrationCertificateFooterThinComponent } from './tax-registration-certificate-footer-thin.component';

describe('TaxRegistrationCertificateFooterThinComponent', () => {
  let component: TaxRegistrationCertificateFooterThinComponent;
  let fixture: ComponentFixture<TaxRegistrationCertificateFooterThinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxRegistrationCertificateFooterThinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxRegistrationCertificateFooterThinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
