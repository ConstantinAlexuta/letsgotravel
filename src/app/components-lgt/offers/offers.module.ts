import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { OffersMenuComponent } from './offers-menu/offers-menu.component';
import { OffersViewComponent } from './offers-view/offers-view.component';
import { OffersFooterComponent } from './offers-footer/offers-footer.component';
import { OffersFooterThinComponent } from './offers-footer-thin/offers-footer-thin.component';
import { OffersViewAllListedComponent } from './offers-view-all-listed/offers-view-all-listed.component';
import { OffersViewAllListedNgBootstrapComponent } from './offers-view-all-listed-ng-bootstrap/offers-view-all-listed-ng-bootstrap.component';
import { OffersViewAllListedPrimeNgComponent } from './offers-view-all-listed-prime-ng/offers-view-all-listed-prime-ng.component';
import { OffersViewAllListedPrimeNgModule } from './offers-view-all-listed-prime-ng/offers-view-all-listed-prime-ng.module';
import { OffersViewAllListedBootstrapComponent } from './offers-view-all-listed-bootstrap/offers-view-all-listed-bootstrap.component';
import { OfferViewComponent } from './offer-view/offer-view.component';



@NgModule({
  declarations: [
    OffersMenuComponent, 
    OffersViewComponent, 
    OffersFooterComponent, 
    OffersFooterThinComponent, 
    OffersViewAllListedComponent, 
    OffersViewAllListedNgBootstrapComponent, 
    OffersViewAllListedBootstrapComponent, 
    OfferViewComponent
  ],
  imports: [
    CommonModule,
    OffersViewAllListedPrimeNgModule,

    RouterModule.forChild([
      { path: 'offers/:id', component: OfferViewComponent },
      { path: 'offers', component: OffersViewComponent }
    ])
  ],
  exports: [
    OffersMenuComponent, 
    OffersViewComponent,
    OffersFooterComponent, 
    OffersFooterThinComponent, 
    OffersViewAllListedComponent, 
    OffersViewAllListedNgBootstrapComponent,

    OffersViewAllListedPrimeNgComponent, 
    OffersViewAllListedBootstrapComponent, 
    OfferViewComponent
    
  ]
})
export class OffersModule { }
