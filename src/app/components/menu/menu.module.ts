import { ViewContactModule } from './views/view-contact/view-contact.module';
import { ViewOffersModule } from './views/view-offers/view-offers.module';
import { ViewHomeModule } from './views/view-home/view-home.module';
import { DropdownMenuModule } from './dropdown-menu/dropdown-menu.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuHomeComponent } from './menu-home/menu-home.component';
import { MenuOffersComponent } from './menu-offers/menu-offers.component';
import { MenuContactComponent } from './menu-contact/menu-contact.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { MenuAboutUsComponent } from './dropdown-menu/menus/menu-about-us/menu-about-us.component';
import { MenuFrameworkContractComponent } from './dropdown-menu/menus/menu-framework-contract/menu-framework-contract.component';
import { MenuInsurancePolicyComponent } from './dropdown-menu/menus/menu-our-accreditations/menu-insurance-policy/menu-insurance-policy.component';
import { MenuOurAccreditationsComponent } from './dropdown-menu/menus/menu-our-accreditations/menu-our-accreditations.component';
import { MenuTaxRegistrationCertificateComponent } from './dropdown-menu/menus/menu-our-accreditations/menu-tax-registration-certificate/menu-tax-registration-certificate.component';
import { MenuTourismLicenseComponent } from './dropdown-menu/menus/menu-our-accreditations/menu-tourism-license/menu-tourism-license.component';
import { MenuTourismPatentComponent } from './dropdown-menu/menus/menu-our-accreditations/menu-tourism-patent/menu-tourism-patent.component';
import { MenuPaymentMethodsComponent } from './dropdown-menu/menus/menu-payment-methods/menu-payment-methods.component';
import { MenuPrivacyPolicyComponent } from './dropdown-menu/menus/menu-privacy-policy/menu-privacy-policy.component';
import { MenuReliableCompanyComponent } from './dropdown-menu/menus/menu-reliable-company/menu-reliable-company.component';
import { MenuSocialAndFiscalInformationComponent } from './dropdown-menu/menus/menu-social-and-fiscal-information/menu-social-and-fiscal-information.component';
import { MenuTermsAndConditionsComponent } from './dropdown-menu/menus/menu-terms-and-conditions/menu-terms-and-conditions.component';
import { ViewAboutUsComponent } from './dropdown-menu/views/view-about-us/view-about-us.component';
import { ViewFrameworkContractComponent } from './dropdown-menu/views/view-framework-contract/view-framework-contract.component';
import { ViewInsurancePolicyComponent } from './dropdown-menu/views/view-our-accreditations/view-insurance-policy/view-insurance-policy.component';
import { ViewOurAccreditationsComponent } from './dropdown-menu/views/view-our-accreditations/view-our-accreditations.component';
import { ViewTaxRegistrationCertificateComponent } from './dropdown-menu/views/view-our-accreditations/view-tax-registration-certificate/view-tax-registration-certificate.component';
import { ViewTourismLicenseComponent } from './dropdown-menu/views/view-our-accreditations/view-tourism-license/view-tourism-license.component';
import { ViewTourismPatentComponent } from './dropdown-menu/views/view-our-accreditations/view-tourism-patent/view-tourism-patent.component';
import { ViewPaymentMethodsComponent } from './dropdown-menu/views/view-payment-methods/view-payment-methods.component';
import { ViewPrivacyPolicyComponent } from './dropdown-menu/views/view-privacy-policy/view-privacy-policy.component';
import { ViewReliableCompanyComponent } from './dropdown-menu/views/view-reliable-company/view-reliable-company.component';
import { ViewSocialAndFiscalInformationComponent } from './dropdown-menu/views/view-social-and-fiscal-information/view-social-and-fiscal-information.component';
import { ViewTermsAndConditionsComponent } from './dropdown-menu/views/view-terms-and-conditions/view-terms-and-conditions.component';
import { MenuLogoComponent } from './menu-logo/menu-logo.component';
import { MenuLine1Component } from './menu-line1/menu-line1.component';
import { MenuLogoSmallComponent } from './menu-logo-small/menu-logo-small.component';
import { DropdownMenuRightMobileComponent } from './dropdown-menu-right-mobile/dropdown-menu-right-mobile.component';
import { DropdownMenuDownDesktopComponent } from './dropdown-menu-down-desktop/dropdown-menu-down-desktop.component';



@NgModule({
  declarations: [    
    MenuHomeComponent,
    MenuOffersComponent,    
    MenuContactComponent, 
    MenuLogoComponent, 
    MenuLine1Component, 
    MenuLogoSmallComponent, 
    DropdownMenuRightMobileComponent, 
    DropdownMenuDownDesktopComponent


  ],
  imports: [
    CommonModule,

    ViewHomeModule,
    ViewOffersModule,
    DropdownMenuModule,
    ViewContactModule   
    
  ],
  exports: [
    MenuHomeComponent,
    MenuOffersComponent,
    MenuContactComponent,

    DropdownMenuComponent, 
    
    MenuSocialAndFiscalInformationComponent, 
    MenuPaymentMethodsComponent, 
    MenuAboutUsComponent, 
    MenuReliableCompanyComponent, 
    MenuTermsAndConditionsComponent, 
    MenuFrameworkContractComponent, 
    MenuPrivacyPolicyComponent, 
    MenuOurAccreditationsComponent, 
    MenuTourismLicenseComponent, 
    MenuTourismPatentComponent, 
    MenuInsurancePolicyComponent, 
    MenuTaxRegistrationCertificateComponent,

    ViewSocialAndFiscalInformationComponent, 
    ViewPaymentMethodsComponent, 
    ViewAboutUsComponent, 
    ViewReliableCompanyComponent, 
    ViewTermsAndConditionsComponent, 
    ViewFrameworkContractComponent, 
    ViewPrivacyPolicyComponent, 
    ViewOurAccreditationsComponent, 
    ViewTourismLicenseComponent, 
    ViewTourismPatentComponent, 
    ViewInsurancePolicyComponent,
    ViewTaxRegistrationCertificateComponent,

    MenuLogoComponent, 
    MenuLogoSmallComponent,
    MenuLine1Component, 
    DropdownMenuRightMobileComponent, 
    DropdownMenuDownDesktopComponent

  ]
})
export class MenuModule { }
