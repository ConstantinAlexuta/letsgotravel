import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarMobileComponent } from './navbar-mobile.component';

@NgModule({
  declarations: [NavbarMobileComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarMobileComponent
  ]
})
export class NavbarMobileModule { }
