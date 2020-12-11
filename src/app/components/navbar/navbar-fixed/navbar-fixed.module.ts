import { NavbarFixedLineSuperAdminModule } from './navbar-fixed-line-super-admin/navbar-fixed-line-super-admin.module';
import { NavbarFixedLineAdminModule } from './navbar-fixed-line-admin/navbar-fixed-line-admin.module';
import { NavbarFixedLine3Module } from './navbar-fixed-line3/navbar-fixed-line3.module';
import { NavbarFixedLine2Module } from './navbar-fixed-line2/navbar-fixed-line2.module';
import { NavbarFixedLine1Module } from './navbar-fixed-line1/navbar-fixed-line1.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFixedComponent } from './navbar-fixed.component';
import { NavbarFixedLine1Component } from './navbar-fixed-line1/navbar-fixed-line1.component';
import { NavbarFixedLineAdminComponent } from './navbar-fixed-line-admin/navbar-fixed-line-admin.component';
import { NavbarFixedLine3Component } from './navbar-fixed-line3/navbar-fixed-line3.component';
import { NavbarFixedLine2Component } from './navbar-fixed-line2/navbar-fixed-line2.component';
import { NavbarFixedLineSuperAdminComponent } from './navbar-fixed-line-super-admin/navbar-fixed-line-super-admin.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { NavbarFixedLogoComponent } from './navbar-fixed-logo/navbar-fixed-logo.component';

@NgModule({
  declarations: [
    NavbarFixedComponent,
    NavbarFixedLine1Component,
    NavbarFixedLine2Component,
    NavbarFixedLine3Component,
    NavbarFixedLineAdminComponent,
    NavbarFixedLineSuperAdminComponent,
    LogoComponent,
    NavbarFixedLogoComponent
  ],
  imports: [
    CommonModule,
    NavbarFixedLine1Module,
    NavbarFixedLine2Module,
    NavbarFixedLine3Module,
    NavbarFixedLineAdminModule,
    NavbarFixedLineSuperAdminModule
  ],
  exports: [
    NavbarFixedComponent,
    NavbarFixedLine1Component,
    NavbarFixedLine2Component,
    NavbarFixedLine3Component,
    NavbarFixedLineAdminComponent,
    NavbarFixedLineSuperAdminComponent
  ]
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class NavbarFixedModule { }
