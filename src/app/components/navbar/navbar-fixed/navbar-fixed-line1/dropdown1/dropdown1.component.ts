import { Component, OnInit } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { FrameworkContractComponent } from './framework-contract/framework-contract.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ReliableCompanyComponent } from './reliable-company/reliable-company.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

@Component({
  selector: 'app-dropdown1',
  templateUrl: './dropdown1.component.html',
  styleUrls: ['./dropdown1.component.scss'],
})
export class Dropdown1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
