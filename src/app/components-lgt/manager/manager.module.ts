import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerComponent } from './manager/manager.component';
import { ManagerFooterComponent } from './manager-footer/manager-footer.component';
import { ManagerHeaderComponent } from './manager-header/manager-header.component';
import { ManagerFooterWithOtherUtilLinksComponent } from './manager-footer-with-other-util-links/manager-footer-with-other-util-links.component';
import { ManagerAddOfferComponent } from './offers/manager-add-offer/manager-add-offer.component';
import { ManagerAddOfferFooterComponent } from './offers/manager-add-offer-footer/manager-add-offer-footer.component';
import { ManagerOfferViewComponent } from './offers/manager-offer-view/manager-offer-view.component';
import { ManagerOfferViewFooterComponent } from './offers/manager-offer-view-footer/manager-offer-view-footer.component';
import { ManagerOfferEditComponent } from './offers/manager-offer-edit/manager-offer-edit.component';
import { ManagerOfferEditFooterComponent } from './offers/manager-offer-edit-footer/manager-offer-edit-footer.component';
import { ManagerOffersViewComponent } from './offers/manager-offers-view/manager-offers-view.component';
import { ManagerOffersViewFooterComponent } from './offers/manager-offers-view-footer/manager-offers-view-footer.component';
import { ManagerOffersEditComponent } from './offers/manager-offers-edit/manager-offers-edit.component';
import { ManagerOffersEditFooterComponent } from './offers/manager-offers-edit-footer/manager-offers-edit-footer.component';
import { RouterModule } from '@angular/router';
import { ManagerAddOffersComponent } from './offers/manager-add-offers/manager-add-offers.component';
import { ManagerAddOffersFooterComponent } from './offers/manager-add-offers-footer/manager-add-offers-footer.component';

@NgModule({
  declarations: [
    ManagerComponent, 
    ManagerFooterComponent, 
    ManagerHeaderComponent, 
    ManagerFooterWithOtherUtilLinksComponent, 
    ManagerAddOfferComponent, 
    ManagerAddOfferFooterComponent, 
    ManagerOfferViewComponent, 
    ManagerOfferViewFooterComponent, 
    ManagerOfferEditComponent, 
    ManagerOfferEditFooterComponent, 
    ManagerOffersViewComponent, 
    ManagerOffersViewFooterComponent, 
    ManagerOffersEditComponent, 
    ManagerOffersEditFooterComponent, 
    ManagerAddOffersComponent, 
    ManagerAddOffersFooterComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
        { path: 'manager', component: ManagerComponent },
        { path: 'manager-add-offer', component: ManagerAddOfferComponent },
        { path: 'manager-view-offer', component: ManagerOfferViewComponent },
        { path: 'manager-edit-offer', component: ManagerOfferEditComponent },
        { path: 'manager-add-offers', component: ManagerAddOffersComponent },
        { path: 'manager-view-offers', component: ManagerOffersViewComponent },
        { path: 'manager-edit-offers', component: ManagerOffersEditComponent }
  ])
  ],
  exports: [
    ManagerComponent, 
    ManagerFooterComponent, 
    ManagerHeaderComponent, 
    ManagerFooterWithOtherUtilLinksComponent, 
    ManagerAddOfferComponent, 
    ManagerAddOfferFooterComponent, 
    ManagerOfferViewComponent, 
    ManagerOfferViewFooterComponent, 
    ManagerOfferEditComponent, 
    ManagerOfferEditFooterComponent, 
    ManagerOffersViewComponent, 
    ManagerOffersViewFooterComponent, 
    ManagerOffersEditComponent, 
    ManagerOffersEditFooterComponent, 
    ManagerAddOffersComponent, 
    ManagerAddOffersFooterComponent
  ]
})
export class ManagerModule { }
