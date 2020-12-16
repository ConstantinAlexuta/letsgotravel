import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTaxRegistrationCertificateComponent } from './menu-tax-registration-certificate.component';

describe('MenuTaxRegistrationCertificateComponent', () => {
  let component: MenuTaxRegistrationCertificateComponent;
  let fixture: ComponentFixture<MenuTaxRegistrationCertificateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTaxRegistrationCertificateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTaxRegistrationCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
