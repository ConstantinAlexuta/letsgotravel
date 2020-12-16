import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownMenuComponent } from './dropdown-menu.component';

import { MenuSocialAndFiscalInformationComponent } from './menus/menu-social-and-fiscal-information/menu-social-and-fiscal-information.component';
import { MenuPaymentMethodsComponent } from './menus/menu-payment-methods/menu-payment-methods.component';
import { MenuAboutUsComponent } from './menus/menu-about-us/menu-about-us.component';
import { MenuReliableCompanyComponent } from './menus/menu-reliable-company/menu-reliable-company.component';
import { MenuTermsAndConditionsComponent } from './menus/menu-terms-and-conditions/menu-terms-and-conditions.component';
import { MenuFrameworkContractComponent } from './menus/menu-framework-contract/menu-framework-contract.component';
import { MenuPrivacyPolicyComponent } from './menus/menu-privacy-policy/menu-privacy-policy.component';
import { MenuOurAccreditationsComponent } from './menus/menu-our-accreditations/menu-our-accreditations.component';
import { MenuTourismLicenseComponent } from './menus/menu-our-accreditations/menu-tourism-license/menu-tourism-license.component';
import { MenuTourismPatentComponent } from './menus/menu-our-accreditations/menu-tourism-patent/menu-tourism-patent.component';
import { MenuInsurancePolicyComponent } from './menus/menu-our-accreditations/menu-insurance-policy/menu-insurance-policy.component';
import { MenuTaxRegistrationCertificateComponent } from './menus/menu-our-accreditations/menu-tax-registration-certificate/menu-tax-registration-certificate.component';

import { ViewSocialAndFiscalInformationComponent } from './views/view-social-and-fiscal-information/view-social-and-fiscal-information.component';
import { ViewPaymentMethodsComponent } from './views/view-payment-methods/view-payment-methods.component';
import { ViewAboutUsComponent } from './views/view-about-us/view-about-us.component';
import { ViewReliableCompanyComponent } from './views/view-reliable-company/view-reliable-company.component';
import { ViewTermsAndConditionsComponent } from './views/view-terms-and-conditions/view-terms-and-conditions.component';
import { ViewFrameworkContractComponent } from './views/view-framework-contract/view-framework-contract.component';
import { ViewPrivacyPolicyComponent } from './views/view-privacy-policy/view-privacy-policy.component';
import { ViewOurAccreditationsComponent } from './views/view-our-accreditations/view-our-accreditations.component';
import { ViewTourismLicenseComponent } from './views/view-our-accreditations/view-tourism-license/view-tourism-license.component';
import { ViewTourismPatentComponent } from './views/view-our-accreditations/view-tourism-patent/view-tourism-patent.component';
import { ViewInsurancePolicyComponent } from './views/view-our-accreditations/view-insurance-policy/view-insurance-policy.component';
import { ViewTaxRegistrationCertificateComponent } from './views/view-our-accreditations/view-tax-registration-certificate/view-tax-registration-certificate.component';



@NgModule({
  declarations: [
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
    ViewTaxRegistrationCertificateComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'view-about-us', component: ViewAboutUsComponent },
        { path: 'view-reliable-company', component: ViewReliableCompanyComponent },
        { path: 'view-terms-and-conditions', component: ViewTermsAndConditionsComponent },
        { path: 'view-framework-contract', component: ViewFrameworkContractComponent },
        { path: 'view-privacy-policy', component: ViewPrivacyPolicyComponent },

        { path: 'view-our-accreditations', component: ViewOurAccreditationsComponent },

        { path: 'view-tourism-license', component: ViewTourismLicenseComponent },
        { path: 'view-tourism-patent', component: ViewTourismPatentComponent },
        { path: 'view-insurance-policy', component: ViewInsurancePolicyComponent },
        { path: 'view-tax-registration-certificate', component: ViewTaxRegistrationCertificateComponent },
        { path: 'view-social-and-fiscal-information', component: ViewSocialAndFiscalInformationComponent },
        { path: 'view-payment-methods', component: ViewPaymentMethodsComponent }
    ])
  ],
  exports: [
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
    ViewTaxRegistrationCertificateComponent
  ]
})
export class DropdownMenuModule { }
