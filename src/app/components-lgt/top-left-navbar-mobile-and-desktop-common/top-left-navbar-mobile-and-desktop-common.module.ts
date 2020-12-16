import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopLeftNavbarMobileAndDesktopCommonComponent } from './top-left-navbar-mobile-and-desktop-common.component';
import { HomeModule } from '../home/home.module';



@NgModule({
  declarations: [
    TopLeftNavbarMobileAndDesktopCommonComponent
  ],
  imports: [
    CommonModule,
    HomeModule
  ],
  exports: [
    TopLeftNavbarMobileAndDesktopCommonComponent
  ]
})
export class TopLeftNavbarMobileAndDesktopCommonModule { }
