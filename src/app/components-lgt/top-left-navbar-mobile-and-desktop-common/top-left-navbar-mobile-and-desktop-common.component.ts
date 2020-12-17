import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-left-navbar-mobile-and-desktop-common',
  templateUrl: './top-left-navbar-mobile-and-desktop-common.component.html',
  styleUrls: ['./top-left-navbar-mobile-and-desktop-common.component.scss']
})
export class TopLeftNavbarMobileAndDesktopCommonComponent implements OnInit {

  // app_privacy_policy_footer_element = document.getElementById('app-privacy-policy-footer-id');

  constructor() { }

  ngOnInit(): void {
    if(this.getWidth() < this.mobileResolutionSetting) {
        this.isMobile = true;
    }
  }


    mobileResolutionSetting = 700;
  desktopResolution = 1200;
  isMobile = false;
  public getWidth() {
      return window.innerWidth;
  }

  ariaExpanded = false;

  ngIfAriaExpanded = true; ////

  isShowDiv = true;
   
  toggleDisplayDiv() {

    this.isShowDiv = !this.isShowDiv;



    if(this.isMobile) {
        this.ngIfAriaExpanded = !this.ngIfAriaExpanded;
    }
    this.ariaExpanded = !this.ariaExpanded;

    

  }

}
