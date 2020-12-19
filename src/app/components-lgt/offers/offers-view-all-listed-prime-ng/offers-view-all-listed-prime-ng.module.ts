import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersViewAllListedPrimeNgComponent } from './offers-view-all-listed-prime-ng.component';

import { PrimeNGConfig } from 'primeng/api';
import {CardModule} from 'primeng/card';

@NgModule({
  declarations: [
    OffersViewAllListedPrimeNgComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OffersViewAllListedPrimeNgComponent
  ]
})
export class OffersViewAllListedPrimeNgModule { }
