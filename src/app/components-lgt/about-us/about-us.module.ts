import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { OurAccreditationsComponent } from './our-accreditations/our-accreditations.component';
import { InsurancePolicyComponent } from './insurance-policy/insurance-policy.component';
import { TaxRegistrationCertificateComponent } from './tax-registration-certificate/tax-registration-certificate.component';
import { TourismLicenseComponent } from './tourism-license/tourism-license.component';
import { TourismPatentComponent } from './tourism-patent/tourism-patent.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { SocialAndFiscalInformationComponent } from './social-and-fiscal-information/social-and-fiscal-information.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { AboutUsDropdownDesktopMenuComponent } from './about-us-dropdown-desktop-menu/about-us-dropdown-desktop-menu.component';
import { AboutUsDropdownMobileMenuComponent } from './about-us-dropdown-mobile-menu/about-us-dropdown-mobile-menu.component';

import { RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    FrameworkContractComponent, 
    OurAccreditationsComponent, 
    InsurancePolicyComponent, 
    TaxRegistrationCertificateComponent, 
    TourismLicenseComponent, 
    TourismPatentComponent, 
    PaymentMethodsComponent, 
    PrivacyPolicyComponent, 
    ReliableCompanyComponent, 
    SocialAndFiscalInformationComponent, 
    TermsAndConditionsComponent, 
    AboutUsDropdownDesktopMenuComponent, 
    AboutUsDropdownMobileMenuComponent, 
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
        { path: 'about-us', component: AboutUsComponent },
        { path: 'reliable-company', component: ReliableCompanyComponent },
        { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
        { path: 'framework-contract', component: FrameworkContractComponent },
        { path: 'privacy-policy', component: PrivacyPolicyComponent },

        { path: 'our-accreditations', component: OurAccreditationsComponent },

        { path: 'tourism-license', component: TourismLicenseComponent },
        { path: 'tourism-patent', component: TourismPatentComponent },
        { path: 'insurance-policy', component: InsurancePolicyComponent },
        { path: 'tax-registration-certificate', component: TaxRegistrationCertificateComponent },
        { path: 'social-and-fiscal-information', component: SocialAndFiscalInformationComponent },
        { path: 'payment-methods', component: PaymentMethodsComponent }
  ])
  ],
  exports: [
    AboutUsComponent,
    FrameworkContractComponent, 
    OurAccreditationsComponent, 
    InsurancePolicyComponent, 
    TaxRegistrationCertificateComponent, 
    TourismLicenseComponent, 
    TourismPatentComponent, 
    PaymentMethodsComponent, 
    PrivacyPolicyComponent, 
    ReliableCompanyComponent, 
    SocialAndFiscalInformationComponent, 
    TermsAndConditionsComponent, 
    AboutUsDropdownDesktopMenuComponent, 
    AboutUsDropdownMobileMenuComponent
  ]
})
export class AboutUsModule { }
