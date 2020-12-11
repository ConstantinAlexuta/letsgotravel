import { DropdownModule } from './../line1/dropdown/dropdown.module';
import { OffersModule } from './offers/offers.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Line1Component } from './line1.component';
import { ContactComponent } from './contact/contact.component';
import { HomeModule } from './home/home.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { AdminComponent } from '../admin/admin.component';
import { SuperAdminComponent } from '../super-admin/super-admin.component';



@NgModule({
  declarations: [Line1Component, ContactComponent],
  imports: [
    CommonModule,
    HomeModule,
    OffersModule,
    DropdownModule,
    RouterModule.forChild([
          { path: 'home', component: HomeComponent },
          { path: 'offers', component: OffersComponent },
          { path: 'contact', component: ContactComponent },
          { path: 'admin', component: AdminComponent },
          { path: 'super-admin', component: SuperAdminComponent },
      ])
  ],
  exports: [
    Line1Component
  ]
})
export class Line1Module { }
