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

  mobileResolution = 700;
  desktopResolution = 1200;
  public getWidth() {
  return window.innerWidth;
}


}
