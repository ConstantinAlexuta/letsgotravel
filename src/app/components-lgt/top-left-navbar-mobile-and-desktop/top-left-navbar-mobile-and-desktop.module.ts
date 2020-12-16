import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopComponent } from './top-left-navbar-mobile-and-desktop.component';
import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';
import { ContactModule } from '../contact/contact.module';

@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopComponent
  ],
  imports: [
    CommonModule,

    HomeModule,
    OffersModule,
    ContactModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopComponent
  ]
})
export class TopLeftNavbarMobileAndDesktopModule { }
