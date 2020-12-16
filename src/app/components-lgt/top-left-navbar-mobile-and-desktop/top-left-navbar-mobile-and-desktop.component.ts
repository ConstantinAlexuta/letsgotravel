import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-left-navbar-mobile-and-desktop',
  templateUrl: './top-left-navbar-mobile-and-desktop.component.html',
  styleUrls: ['./top-left-navbar-mobile-and-desktop.component.scss']
})
export class TopLeftNavbarMobileAndDesktopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public mobileMenuAriaExpanded: boolean = false;

  public switchMobileMenuAriaExpanded(): boolean {
    return this.mobileMenuAriaExpanded = false;
  }

  public closeMobileMenuAriaExpanded() {

  }

  mobileResolution = 7000;
  desktopResolution = 1200;
  public getWidth() {
  return window.innerWidth;
}


  isShowDiv = true;
   
  toggleDisplayDiv() {
    this.isShowDiv = !this.isShowDiv;
  }



}
