import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFixedLine1Component } from './navbar-fixed-line1.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarFixedLine1Dropdown1Module } from './navbar-fixed-line1-dropdown1/navbar-fixed-line1-dropdown1.module';
import { NavbarFixedLine1Dropdown1Component } from './navbar-fixed-line1-dropdown1/navbar-fixed-line1-dropdown1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
      // NavbarFixedLine1Component, 
      // HomeComponent, 
      // OffersComponent, 
      // NavbarFixedLine1Dropdown1Component,
      // ContactComponent
  ],
  imports: [
      CommonModule,
      NavbarFixedLine1Dropdown1Module,
      RouterModule.forChild([
          { path: 'hone', component: HomeComponent },
          { path: 'offers', component: OffersComponent },
          // { path: 'contact', component: ContactComponent },
      ])
  ], 
  exports: [
      // NavbarFixedLine1Component, 
      // HomeComponent, 
      // OffersComponent, 
      // NavbarFixedLine1Dropdown1Component,
      // ContactComponent
  ]
})
export class NavbarFixedLine1Module { }
