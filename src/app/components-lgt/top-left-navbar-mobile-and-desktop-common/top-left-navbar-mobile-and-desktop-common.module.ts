import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopCommonComponent } from './top-left-navbar-mobile-and-desktop-common.component';
import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';
import { AboutUsModule } from '../about-us/about-us.module';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopCommonComponent
  ],
  imports: [
    CommonModule,

    HomeModule,
    OffersModule,
    AboutUsModule,
    ContactModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopCommonComponent
  ]
})
export class TopLeftNavbarMobileAndDesktopCommonModule { }
