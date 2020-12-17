import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OffersMenuComponent } from './offers-menu/offers-menu.component';
import { OffersViewComponent } from './offers-view/offers-view.component';
import { OffersFooterComponent } from './offers-footer/offers-footer.component';
import { OffersFooterThinComponent } from './offers-footer-thin/offers-footer-thin.component';



@NgModule({
  declarations: [
    OffersMenuComponent, 
    OffersViewComponent, 
    OffersFooterComponent, 
    OffersFooterThinComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'offers', component: OffersViewComponent }
    ])
  ],
  exports: [
    OffersMenuComponent, 
    OffersViewComponent,
    OffersFooterComponent, 
    OffersFooterThinComponent
  ]
})
export class OffersModule { }
