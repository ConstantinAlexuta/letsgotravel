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
import { AboutUsFooterComponent } from './about-us-footer/about-us-footer.component';
import { FrameworkContractFooterComponent } from './framework-contract-footer/framework-contract-footer.component';
import { OurAccreditationsFooterComponent } from './our-accreditations-footer/our-accreditations-footer.component';
import { InsurancePolicyFooterComponent } from './insurance-policy-footer/insurance-policy-footer.component';
import { TaxRegistrationCertificateFooterComponent } from './tax-registration-certificate-footer/tax-registration-certificate-footer.component';
import { TourismLicenseFooterComponent } from './tourism-license-footer/tourism-license-footer.component';
import { TourismPatentFooterComponent } from './tourism-patent-footer/tourism-patent-footer.component';
import { PaymentMethodsFooterComponent } from './payment-methods-footer/payment-methods-footer.component';
import { PrivacyPolicyFooterComponent } from './privacy-policy-footer/privacy-policy-footer.component';
import { ReliableCompanyFooterComponent } from './reliable-company-footer/reliable-company-footer.component';
import { SocialAndFiscalInformationFooterComponent } from './social-and-fiscal-information-footer/social-and-fiscal-information-footer.component';
import { TermsAndConditionsFooterComponent } from './terms-and-conditions-footer/terms-and-conditions-footer.component';
import { AboutUsMenuComponent } from './about-us-menu/about-us-menu.component';
import { FrameworkContractMenuComponent } from './framework-contract-menu/framework-contract-menu.component';
import { OurAccreditationsMenuComponent } from './our-accreditations-menu/our-accreditations-menu.component';
import { InsurancePolicyMenuComponent } from './insurance-policy-menu/insurance-policy-menu.component';
import { TaxRegistrationCertificateMenuComponent } from './tax-registration-certificate-menu/tax-registration-certificate-menu.component';
import { TourismLicenseMenuComponent } from './tourism-license-menu/tourism-license-menu.component';
import { TourismPatentMenuComponent } from './tourism-patent-menu/tourism-patent-menu.component';
import { PaymentMethodsMenuComponent } from './payment-methods-menu/payment-methods-menu.component';
import { PrivacyPolicyMenuComponent } from './privacy-policy-menu/privacy-policy-menu.component';
import { ReliableCompanyMenuComponent } from './reliable-company-menu/reliable-company-menu.component';
import { SocialAndFiscalInformationMenuComponent } from './social-and-fiscal-information-menu/social-and-fiscal-information-menu.component';
import { TermsAndConditionsMenuComponent } from './terms-and-conditions-menu/terms-and-conditions-menu.component';
import { AboutUsFooterThinComponent } from './about-us-footer-thin/about-us-footer-thin.component';
import { FrameworkContractFooterThinComponent } from './framework-contract-footer-thin/framework-contract-footer-thin.component';
import { OurAccreditationsFooterThinComponent } from './our-accreditations-footer-thin/our-accreditations-footer-thin.component';
import { InsurancePolicyFooterThinComponent } from './insurance-policy-footer-thin/insurance-policy-footer-thin.component';
import { TaxRegistrationCertificateFooterThinComponent } from './tax-registration-certificate-footer-thin/tax-registration-certificate-footer-thin.component';
import { TourismLicenseFooterThinComponent } from './tourism-license-footer-thin/tourism-license-footer-thin.component';
import { TourismPatentFooterThinComponent } from './tourism-patent-footer-thin/tourism-patent-footer-thin.component';
import { PaymentMethodsFooterThinComponent } from './payment-methods-footer-thin/payment-methods-footer-thin.component';
import { PrivacyPolicyFooterThinComponent } from './privacy-policy-footer-thin/privacy-policy-footer-thin.component';
import { ReliableCompanyFooterThinComponent } from './reliable-company-footer-thin/reliable-company-footer-thin.component';
import { SocialAndFiscalInformationFooterThinComponent } from './social-and-fiscal-information-footer-thin/social-and-fiscal-information-footer-thin.component';
import { TermsAndConditionsFooterThinComponent } from './terms-and-conditions-footer-thin/terms-and-conditions-footer-thin.component';

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
    
    AboutUsFooterComponent, 
    FrameworkContractFooterComponent, 
    OurAccreditationsFooterComponent, 
    InsurancePolicyFooterComponent, 
    TaxRegistrationCertificateFooterComponent, 
    TourismLicenseFooterComponent, 
    TourismPatentFooterComponent, 
    PaymentMethodsFooterComponent, 
    PrivacyPolicyFooterComponent, 
    ReliableCompanyFooterComponent, 
    SocialAndFiscalInformationFooterComponent, 
    TermsAndConditionsFooterComponent, 
    
    AboutUsMenuComponent, 
    FrameworkContractMenuComponent, 
    OurAccreditationsMenuComponent, 
    InsurancePolicyMenuComponent, 
    TaxRegistrationCertificateMenuComponent, 
    TourismLicenseMenuComponent, 
    TourismPatentMenuComponent, 
    PaymentMethodsMenuComponent, 
    PrivacyPolicyMenuComponent, 
    ReliableCompanyMenuComponent, 
    SocialAndFiscalInformationMenuComponent, 
    
    TermsAndConditionsMenuComponent, 
    AboutUsFooterThinComponent, 
    FrameworkContractFooterThinComponent, 
    OurAccreditationsFooterThinComponent, 
    InsurancePolicyFooterThinComponent, 
    TaxRegistrationCertificateFooterThinComponent, 
    TourismLicenseFooterThinComponent, 
    TourismPatentFooterThinComponent, 
    PaymentMethodsFooterThinComponent, 
    PrivacyPolicyFooterThinComponent, 
    ReliableCompanyFooterThinComponent, 
    SocialAndFiscalInformationFooterThinComponent, 
    TermsAndConditionsFooterThinComponent
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
    AboutUsDropdownMobileMenuComponent, 
    
    AboutUsFooterComponent, 
    FrameworkContractFooterComponent, 
    OurAccreditationsFooterComponent, 
    InsurancePolicyFooterComponent, 
    TaxRegistrationCertificateFooterComponent, 
    TourismLicenseFooterComponent, 
    TourismPatentFooterComponent, 
    PaymentMethodsFooterComponent, 
    PrivacyPolicyFooterComponent, 
    ReliableCompanyFooterComponent, 
    SocialAndFiscalInformationFooterComponent, 
    TermsAndConditionsFooterComponent, 
    
    AboutUsMenuComponent, 
    FrameworkContractMenuComponent, 
    OurAccreditationsMenuComponent, 
    InsurancePolicyMenuComponent, 
    TaxRegistrationCertificateMenuComponent, 
    TourismLicenseMenuComponent, 
    TourismPatentMenuComponent, 
    PaymentMethodsMenuComponent, 
    PrivacyPolicyMenuComponent, 
    ReliableCompanyMenuComponent, 
    SocialAndFiscalInformationMenuComponent, 
    
    TermsAndConditionsMenuComponent, 
    AboutUsFooterThinComponent, 
    FrameworkContractFooterThinComponent, 
    OurAccreditationsFooterThinComponent, 
    InsurancePolicyFooterThinComponent, 
    TaxRegistrationCertificateFooterThinComponent, 
    TourismLicenseFooterThinComponent, 
    TourismPatentFooterThinComponent, 
    PaymentMethodsFooterThinComponent, 
    PrivacyPolicyFooterThinComponent, 
    ReliableCompanyFooterThinComponent, 
    SocialAndFiscalInformationFooterThinComponent, 
    TermsAndConditionsFooterThinComponent
  ]
})
export class AboutUsModule { }
