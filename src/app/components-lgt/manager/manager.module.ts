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
import { OffersBasicsDataModule } from './offers-basics-data/offers-basics-data.module';
import { OffersBasicsDataFooterComponent } from './offers-basics-data/offers-basics-data-footer/offers-basics-data-footer.component';
import { OffersBasicsDataComponent } from './offers-basics-data/offers-basics-data/offers-basics-data.component';
import { OffersIncludedServiceFooterComponent } from './offers-basics-data/offers-included-service-footer/offers-included-service-footer.component';
import { OffersIncludedServiceComponent } from './offers-basics-data/offers-included-service/offers-included-service.component';
import { OffersServiceTypeFooterComponent } from './offers-basics-data/offers-service-type-footer/offers-service-type-footer.component';
import { OffersServiceTypeComponent } from './offers-basics-data/offers-service-type/offers-service-type.component';

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
    OffersBasicsDataModule,

    RouterModule.forChild([
        { path: 'manager', component: ManagerComponent },
        { path: 'manager-add-offer', component: ManagerAddOfferComponent },
        { path: 'manager-view-offer', component: ManagerOfferViewComponent },
        { path: 'manager-edit-offer', component: ManagerOfferEditComponent },
        { path: 'manager-add-offers', component: ManagerAddOffersComponent },
        { path: 'manager-view-offers', component: ManagerOffersViewComponent },
        { path: 'manager-edit-offers', component: ManagerOffersEditComponent }

        // { path: 'manager-offers-basic-dates', component: OffersBasicsDataComponent },
        // { path: 'manager-offers-service-types', component: OffersBasicsDataComponent },
        // { path: 'manager-offers-included-services', component: OffersBasicsDataComponent }
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
    ManagerAddOffersFooterComponent,

    OffersBasicsDataComponent, 
    OffersBasicsDataFooterComponent, 
    OffersServiceTypeComponent, 
    OffersServiceTypeFooterComponent, 
    OffersIncludedServiceComponent, 
    OffersIncludedServiceFooterComponent
  ]
})
export class ManagerModule { }
