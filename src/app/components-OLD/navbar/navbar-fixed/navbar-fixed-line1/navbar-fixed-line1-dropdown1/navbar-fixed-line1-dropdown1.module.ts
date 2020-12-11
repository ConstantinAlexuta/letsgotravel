import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { NavbarFixedLine1Dropdown1Component } from './navbar-fixed-line1-dropdown1.component';

@NgModule({
  declarations: [
      // AboutUsComponent,
      // FrameworkContractComponent,
      // PrivacyPolicyComponent,
      // ReliableCompanyComponent,
      // TermsAndConditionsComponent,
      // NavbarFixedLine1Dropdown1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        { path: 'about-us', component: AboutUsComponent },
        { path: 'reliable-company', component: ReliableCompanyComponent },
        { path: 'terms-and-conditions', component: TermsAndConditionsComponent },
        { path: 'framework-contract', component: FrameworkContractComponent },
        { path: 'privacy-policy', component: PrivacyPolicyComponent }
    ])
  ],
  exports: [
      // AboutUsComponent,
      // FrameworkContractComponent,
      // PrivacyPolicyComponent,
      // ReliableCompanyComponent,
      // TermsAndConditionsComponent,
      // NavbarFixedLine1Dropdown1Component
  ]
})
export class NavbarFixedLine1Dropdown1Module { }
