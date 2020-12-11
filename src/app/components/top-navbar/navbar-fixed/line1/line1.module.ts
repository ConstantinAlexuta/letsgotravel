import { DropdownModule } from './../line1/dropdown/dropdown.module';
import { OffersModule } from './offers/offers.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Line1Component } from './line1.component';
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';



@NgModule({
  declarations: [Line1Component, ContactComponent],
  imports: [
    CommonModule,
    HomeModule,
    OffersModule,
    DropdownModule
  ],
  exports: [
    Line1Component
  ]
})
export class Line1Module { }
