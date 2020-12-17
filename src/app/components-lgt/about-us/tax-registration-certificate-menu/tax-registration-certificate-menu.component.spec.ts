import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegistrationCertificateMenuComponent } from './tax-registration-certificate-menu.component';

describe('TaxRegistrationCertificateMenuComponent', () => {
  let component: TaxRegistrationCertificateMenuComponent;
  let fixture: ComponentFixture<TaxRegistrationCertificateMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxRegistrationCertificateMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxRegistrationCertificateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
