import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffersBasicsDataComponent } from './offers-basics-data/offers-basics-data.component';
import { OffersBasicsDataFooterComponent } from './offers-basics-data-footer/offers-basics-data-footer.component';
import { OffersServiceTypeComponent } from './offers-service-type/offers-service-type.component';
import { OffersServiceTypeFooterComponent } from './offers-service-type-footer/offers-service-type-footer.component';
import { OffersIncludedServiceComponent } from './offers-included-service/offers-included-service.component';
import { OffersIncludedServiceFooterComponent } from './offers-included-service-footer/offers-included-service-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OffersBasicsDataComponent, 
    OffersBasicsDataFooterComponent, 
    OffersServiceTypeComponent, 
    OffersServiceTypeFooterComponent, 
    OffersIncludedServiceComponent, 
    OffersIncludedServiceFooterComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
        { path: 'manager-offers-basic-dates', component: OffersBasicsDataComponent },
        { path: 'manager-offers-service-types', component: OffersBasicsDataComponent },
        { path: 'manager-offers-included-services', component: OffersBasicsDataComponent }
  ])
  ],
  exports: [
    OffersBasicsDataComponent, 
    OffersBasicsDataFooterComponent, 
    OffersServiceTypeComponent, 
    OffersServiceTypeFooterComponent, 
    OffersIncludedServiceComponent, 
    OffersIncludedServiceFooterComponent
  ]
})
export class OffersBasicsDataModule { }
