import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuDropdownComponent } from './menu-dropdown.component';
import { MenuSocialAndFiscalInformationComponent } from './menu-social-and-fiscal-information/menu-social-and-fiscal-information.component';
import { MenuPaymentMethodsComponent } from './menu-payment-methods/menu-payment-methods.component';
import { MenuAboutUsComponent } from './menu-about-us/menu-about-us.component';
import { MenuReliableCompanyComponent } from './menu-reliable-company/menu-reliable-company.component';
import { MenuTermsAndConditionsComponent } from './menu-terms-and-conditions/menu-terms-and-conditions.component';
import { MenuFrameworkContractComponent } from './menu-framework-contract/menu-framework-contract.component';
import { MenuPrivacyPolicyComponent } from './menu-privacy-policy/menu-privacy-policy.component';
import { MenuOurAccreditationsComponent } from './menu-our-accreditations/menu-our-accreditations.component';
import { MenuTourismLicenseComponent } from './menu-our-accreditations/menu-tourism-license/menu-tourism-license.component';
import { MenuTourismPatentComponent } from './menu-our-accreditations/menu-tourism-patent/menu-tourism-patent.component';
import { MenuInsurancePolicyComponent } from './menu-our-accreditations/menu-insurance-policy/menu-insurance-policy.component';
import { MenuTaxRegistrationCertificateComponent } from './menu-our-accreditations/menu-tax-registration-certificate/menu-tax-registration-certificate.component';



@NgModule({
  declarations: [MenuDropdownComponent, MenuSocialAndFiscalInformationComponent, MenuPaymentMethodsComponent, MenuAboutUsComponent, MenuReliableCompanyComponent, MenuTermsAndConditionsComponent, MenuFrameworkContractComponent, MenuPrivacyPolicyComponent, MenuOurAccreditationsComponent, MenuTourismLicenseComponent, MenuTourismPatentComponent, MenuInsurancePolicyComponent, MenuTaxRegistrationCertificateComponent],
  imports: [
    CommonModule
  ]
})
export class MenuDropdownModule { }
