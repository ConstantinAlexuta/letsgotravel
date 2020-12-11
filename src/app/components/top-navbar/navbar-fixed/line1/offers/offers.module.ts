import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OffersComponent } from './offers.component';



@NgModule({
  declarations: [OffersComponent],
  imports: [
    CommonModule
  ],
  exports: [
    OffersComponent
  ]
})
export class OffersModule { }
