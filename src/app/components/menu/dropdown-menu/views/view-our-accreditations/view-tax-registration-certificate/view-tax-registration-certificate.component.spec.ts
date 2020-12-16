import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaxRegistrationCertificateComponent } from './view-tax-registration-certificate.component';

describe('ViewTaxRegistrationCertificateComponent', () => {
  let component: ViewTaxRegistrationCertificateComponent;
  let fixture: ComponentFixture<ViewTaxRegistrationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewTaxRegistrationCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaxRegistrationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
