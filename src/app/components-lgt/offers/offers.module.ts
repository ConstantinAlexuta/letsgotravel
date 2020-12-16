import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OffersMenuComponent } from './offers-menu/offers-menu.component';
import { OffersViewComponent } from './offers-view/offers-view.component';



@NgModule({
  declarations: [
    OffersMenuComponent, 
    OffersViewComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'offers', component: OffersViewComponent }
    ])
  ],
  exports: [
    OffersMenuComponent, 
    OffersViewComponent
  ]
})
export class OffersModule { }
