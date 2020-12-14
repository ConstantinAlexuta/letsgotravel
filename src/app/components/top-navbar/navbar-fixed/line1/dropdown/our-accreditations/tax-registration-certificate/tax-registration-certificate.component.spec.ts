import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegistrationCertificateComponent } from './tax-registration-certificate.component';

describe('TaxRegistrationCertificateComponent', () => {
  let component: TaxRegistrationCertificateComponent;
  let fixture: ComponentFixture<TaxRegistrationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxRegistrationCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxRegistrationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
