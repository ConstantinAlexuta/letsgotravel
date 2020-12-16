import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopComponent } from './top-left-navbar-mobile-and-desktop.component';
import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';
import { ContactModule } from '../contact/contact.module';
import { AboutUsModule } from '../about-us/about-us.module';

import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,

    HomeModule,
    OffersModule,
    AboutUsModule,
    ContactModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopComponent,
    FooterComponent
  ]
})
export class TopLeftNavbarMobileAndDesktopModule { }
