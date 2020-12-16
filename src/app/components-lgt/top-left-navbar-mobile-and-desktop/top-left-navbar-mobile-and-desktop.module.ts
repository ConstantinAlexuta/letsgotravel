import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopComponent } from './top-left-navbar-mobile-and-desktop.component';
import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';
import { ContactModule } from '../contact/contact.module';
import { AboutUsModule } from '../about-us/about-us.module';

import { AboutUsDropdownDesktopMenuComponent } from '../about-us/about-us-dropdown-desktop-menu/about-us-dropdown-desktop-menu.component';
import { AboutUsDropdownMobileMenuComponent } from '../about-us/about-us-dropdown-mobile-menu/about-us-dropdown-mobile-menu.component';
import { AboutUsComponent } from '../about-us/about-us/about-us.component';
import { FrameworkContractComponent } from '../about-us/framework-contract/framework-contract.component';
import { InsurancePolicyComponent } from '../about-us/insurance-policy/insurance-policy.component';
import { OurAccreditationsComponent } from '../about-us/our-accreditations/our-accreditations.component';
import { PaymentMethodsComponent } from '../about-us/payment-methods/payment-methods.component';
import { PrivacyPolicyComponent } from '../about-us/privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from '../about-us/reliable-company/reliable-company.component';
import { SocialAndFiscalInformationComponent } from '../about-us/social-and-fiscal-information/social-and-fiscal-information.component';
import { TaxRegistrationCertificateComponent } from '../about-us/tax-registration-certificate/tax-registration-certificate.component';
import { TermsAndConditionsComponent } from '../about-us/terms-and-conditions/terms-and-conditions.component';
import { TourismLicenseComponent } from '../about-us/tourism-license/tourism-license.component';
import { TourismPatentComponent } from '../about-us/tourism-patent/tourism-patent.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopComponent
  ],
  imports: [
    CommonModule,

    HomeModule,
    OffersModule,
    AboutUsModule,
    ContactModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopComponent,
  ]
})
export class TopLeftNavbarMobileAndDesktopModule { }
