import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarFixedLine1Component } from './navbar-fixed-line1.component';
import { Dropdown1Module } from './dropdown1/dropdown1.module';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { ContactComponent } from './contact/contact.component';
import { Dropdown1Component } from './dropdown1/dropdown1.component';



@NgModule({
  declarations: [
      NavbarFixedLine1Component, 
      HomeComponent, 
      OffersComponent, 
      Dropdown1Component,
      ContactComponent
  ],
  imports: [
    CommonModule,
    Dropdown1Module
  ]
})
export class NavbarFixedLine1Module { }
