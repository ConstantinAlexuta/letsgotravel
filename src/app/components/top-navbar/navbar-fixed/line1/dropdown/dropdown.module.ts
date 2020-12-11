import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DropdownComponent } from './dropdown.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';



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
    CommonModule
  ],
  exports: [
    DropdownComponent
  ]
})
export class DropdownModule { }
