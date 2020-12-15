import { IconsAssociatedModule } from './../../icons-associated/icons-associated.module';
import { SuperAdminModule } from './super-admin/super-admin.module';
import { AdminModule } from './admin/admin.module';
import { Line3Module } from './line3/line3.module';
import { Line2Module } from './line2/line2.module';
import { Line1Module } from './line1/line1.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarFixedComponent } from './navbar-fixed.component';

import { LogoComponent } from './logo/logo.component';


@NgModule({
  declarations: [
    NavbarFixedComponent, 
    LogoComponent
  ],
  imports: [
    CommonModule,
    Line1Module,
    Line2Module,
    Line3Module,
    AdminModule,
    SuperAdminModule,
    IconsAssociatedModule
  ],
  exports: [
    NavbarFixedComponent
  ]
})
export class NavbarFixedModule { }
