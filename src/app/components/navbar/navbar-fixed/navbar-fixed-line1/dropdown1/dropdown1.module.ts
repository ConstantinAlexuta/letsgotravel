import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { Dropdown1Component } from './dropdown1.component';



@NgModule({
  declarations: [
      AboutUsComponent,
      FrameworkContractComponent,
      PrivacyPolicyComponent,
      ReliableCompanyComponent,
      TermsAndConditionsComponent,
      Dropdown1Component
      ],
  imports: [
    CommonModule,
     RouterModule.forChild([
            { path: 'about-us', component: AboutUsComponent },
            { path: 'framework-contract', component: FrameworkContractComponent },
            { path: 'privacy-policy', component: PrivacyPolicyComponent },
            { path: 'reliable-company', component: ReliableCompanyComponent },
            { path: 'terms-and-conditions', component: TermsAndConditionsComponent }
        ])
  ]
})
export class Dropdown1Module { }
