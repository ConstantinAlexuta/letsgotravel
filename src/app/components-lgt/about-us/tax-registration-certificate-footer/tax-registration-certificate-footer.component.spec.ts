import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegistrationCertificateFooterComponent } from './tax-registration-certificate-footer.component';

describe('TaxRegistrationCertificateFooterComponent', () => {
  let component: TaxRegistrationCertificateFooterComponent;
  let fixture: ComponentFixture<TaxRegistrationCertificateFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxRegistrationCertificateFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxRegistrationCertificateFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
