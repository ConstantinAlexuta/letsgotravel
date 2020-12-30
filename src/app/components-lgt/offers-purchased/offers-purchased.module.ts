import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferPurchasedComponent } from './offer-purchased/offer-purchased.component';
import { OffersPurchasedComponent } from './offers-purchased/offers-purchased.component';
import { RouterModule } from '@angular/router';

import { OffersPurchasedService } from './offers-purchased.service';
import { OffersPurchasedFooterComponent } from './offers-purchased-footer/offers-purchased-footer.component';
import { OfferPurchasedFooterComponent } from './offer-purchased-footer/offer-purchased-footer.component';
import { AddOfferToPurchasedComponent } from './add-offer-to-purchased/add-offer-to-purchased.component';
import { AddOfferToPurchasedFooterComponent } from './add-offer-to-purchased-footer/add-offer-to-purchased-footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
 


@NgModule({
  declarations: [
    OfferPurchasedComponent, 
    OffersPurchasedComponent, 
    OffersPurchasedFooterComponent, 
    OfferPurchasedFooterComponent, 
    AddOfferToPurchasedComponent, 
    AddOfferToPurchasedFooterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
        { path: 'add-offer-to-purchase', component: AddOfferToPurchasedComponent },

        // { path: 'offer-purchased/:id', component: OfferPurchasedComponent },
        // { path: 'offer-purchased', component: OfferPurchasedComponent },

        { path: 'offers-purchased/:id', component: OfferPurchasedComponent },
        { path: 'offers-purchased', component: OffersPurchasedComponent }
  ])
  ],
  providers: [
    OffersPurchasedService
  ], 
  exports: [
    OfferPurchasedComponent, 
    OffersPurchasedComponent,
    OffersPurchasedFooterComponent, 
    OfferPurchasedFooterComponent, 
    AddOfferToPurchasedComponent, 
    AddOfferToPurchasedFooterComponent
  ]
})
export class OffersPurchasedModule { }
