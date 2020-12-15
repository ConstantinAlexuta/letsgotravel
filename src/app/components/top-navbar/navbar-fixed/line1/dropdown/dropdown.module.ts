import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { RouterModule } from '@angular/router';
import { OurAccreditationsComponent } from './our-accreditations/our-accreditations.component';
import { TourismLicenseComponent } from './our-accreditations/tourism-license/tourism-license.component';
import { TourismPatentComponent } from './our-accreditations/tourism-patent/tourism-patent.component';
import { InsurancePolicyComponent } from './our-accreditations/insurance-policy/insurance-policy.component';
import { TaxRegistrationCertificateComponent } from './our-accreditations/tax-registration-certificate/tax-registration-certificate.component';
import { SocialAndFiscalInformationComponent } from './social-and-fiscal-information/social-and-fiscal-information.component';
import { PaymentMethodsComponent } from './payment-methods/payment-methods.component';

@NgModule({
  declarations: [
    DropdownComponent, 
    AboutUsComponent, 
    ReliableCompanyComponent, 
    TermsAndConditionsComponent, 
    FrameworkContractComponent, 
    PrivacyPolicyComponent, OurAccreditationsComponent, TourismLicenseComponent, TourismPatentComponent, InsurancePolicyComponent, TaxRegistrationCertificateComponent, SocialAndFiscalInformationComponent, PaymentMethodsComponent
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
    DropdownComponent,
    SocialAndFiscalInformationComponent,
    PaymentMethodsComponent
  ]
})
export class DropdownModule { }
