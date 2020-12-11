import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DropdownComponent, 
    AboutUsComponent, 
    ReliableCompanyComponent, 
    TermsAndConditionsComponent, 
    FrameworkContractComponent, 
    PrivacyPolicyComponent
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
    DropdownComponent
  ]
})
export class DropdownModule { }
