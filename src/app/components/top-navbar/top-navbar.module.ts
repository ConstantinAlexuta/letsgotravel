import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopNavbarComponent } from './top-navbar.component';
import { NavbarFixedModule } from './navbar-fixed/navbar-fixed.module';
import { SideBarLeftModule } from './side-bar-left/side-bar-left.module';
import { SideBarRightModule } from './side-bar-right/side-bar-right.module';




@NgModule({
  declarations: [
    TopNavbarComponent
  ],
  imports: [
    CommonModule,
    NavbarFixedModule,
    SideBarLeftModule,
    SideBarRightModule
  ],
  exports: [
    TopNavbarComponent
  ]
})
export class TopNavbarModule { }
