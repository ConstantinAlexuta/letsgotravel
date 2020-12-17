import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopCommonComponent } from './top-left-navbar-mobile-and-desktop-common.component';
import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';
import { AboutUsModule } from '../about-us/about-us.module';
import { ContactModule } from '../contact/contact.module';
import { FooterMobileComponent } from './footer-mobile.component';



@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopCommonComponent,
    FooterMobileComponent
  ],
  imports: [
    CommonModule,

    HomeModule,
    OffersModule,
    AboutUsModule,
    ContactModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopCommonComponent,
    FooterMobileComponent
  ]
})
export class TopLeftNavbarMobileAndDesktopCommonModule { }
