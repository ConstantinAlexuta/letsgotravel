import { MenuModule } from './../menu/menu.module';
import { IconsAssociatedModule } from './../icons-associated/icons-associated.module';
import { Line1Module } from './../top-navbar/navbar-fixed/line1/line1.module';
import { TopNavbarModule } from './../top-navbar/top-navbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopNavbarMobileAndDesktopComponent } from './top-navbar-mobile-and-desktop.component';

import { HomeModule } from '../home/home.module';
import { OffersModule } from '../offers/offers.module';



@NgModule({
  declarations: [
    TopNavbarMobileAndDesktopComponent
  ],
  imports: [
    CommonModule,
    TopNavbarModule,


    Line1Module,
    IconsAssociatedModule,
    MenuModule,

    HomeModule,
    OffersModule
  ],
  exports: [
    TopNavbarMobileAndDesktopComponent
  ]
})
export class TopNavbarMobileAndDesktopModule { }
