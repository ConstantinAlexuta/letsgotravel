import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataDashboadComponent } from './basic-data/basic-data-dashboad/basic-data-dashboad.component';
import { IncludedServiceAddMoreComponent } from './basic-data/included-service/included-service-add-more/included-service-add-more.component';
import { IncludedServiceAddOneComponent } from './basic-data/included-service/included-service-add-one/included-service-add-one.component';
import { IncludedServiceDashboadFooterComponent } from './basic-data/included-service/included-service-dashboad-footer/included-service-dashboad-footer.component';
import { IncludedServiceDashboadComponent } from './basic-data/included-service/included-service-dashboad/included-service-dashboad.component';
import { IncludedServiceEditMoreComponent } from './basic-data/included-service/included-service-edit-more/included-service-edit-more.component';
import { IncludedServiceEditOneComponent } from './basic-data/included-service/included-service-edit-one/included-service-edit-one.component';
import { IncludedServiceViewAllComponent } from './basic-data/included-service/included-service-view-all/included-service-view-all.component';
import { IncludedServiceViewOneComponent } from './basic-data/included-service/included-service-view-one/included-service-view-one.component';
import { ServiceTypeAddMoreComponent } from './basic-data/service-type/service-type-add-more/service-type-add-more.component';
import { ServiceTypeAddOneComponent } from './basic-data/service-type/service-type-add-one/service-type-add-one.component';
import { ServiceTypeDashboadFooterComponent } from './basic-data/service-type/service-type-dashboad-footer/service-type-dashboad-footer.component';
import { ServiceTypeDashboadComponent } from './basic-data/service-type/service-type-dashboad/service-type-dashboad.component';
import { ServiceTypeEditMoreComponent } from './basic-data/service-type/service-type-edit-more/service-type-edit-more.component';
import { ServiceTypeEditOneComponent } from './basic-data/service-type/service-type-edit-one/service-type-edit-one.component';
import { ServiceTypeViewAllComponent } from './basic-data/service-type/service-type-view-all/service-type-view-all.component';
import { ServiceTypeViewOneComponent } from './basic-data/service-type/service-type-view-one/service-type-view-one.component';
import { ManagerOffersAddMoreComponent } from './manager-offers/manager-offers-add-more/manager-offers-add-more.component';
import { ManagerOffersAddOneComponent } from './manager-offers/manager-offers-add-one/manager-offers-add-one.component';
import { ManagerOffersDashboadFooterComponent } from './manager-offers/manager-offers-dashboad-footer/manager-offers-dashboad-footer.component';
import { ManagerOffersDashboadComponent } from './manager-offers/manager-offers-dashboad/manager-offers-dashboad.component';
import { ManagerOffersEditMoreComponent } from './manager-offers/manager-offers-edit-more/manager-offers-edit-more.component';
import { ManagerOffersEditOneComponent } from './manager-offers/manager-offers-edit-one/manager-offers-edit-one.component';
import { ManagerOffersViewAllComponent } from './manager-offers/manager-offers-view-all/manager-offers-view-all.component';
import { ManagerOffersViewOneComponent } from './manager-offers/manager-offers-view-one/manager-offers-view-one.component';
import { BasicDataModule } from './basic-data/basic-data.module';
import { ManagerOffersModule } from './manager-offers/manager-offers.module';
import { BasicDataDashboadFooterComponent } from './basic-data/basic-data-dashboad-footer/basic-data-dashboad-footer.component';
import { ManagerDashboadComponent } from './manager-dashboad/manager-dashboad.component';
import { ManagerDashboadFooterComponent } from './manager-dashboad-footer/manager-dashboad-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ManagerDashboadComponent, 
    ManagerDashboadFooterComponent
  ],
  imports: [
    CommonModule,

    BasicDataModule,
    ManagerOffersModule,

    RouterModule.forChild([
      { path: 'manager-dashboad', component: ManagerDashboadComponent }
    ])
  ],
  exports: [
    BasicDataDashboadComponent, 
    BasicDataDashboadFooterComponent,

    ServiceTypeDashboadComponent, 
    ServiceTypeDashboadFooterComponent, 
    ServiceTypeViewAllComponent, 
    ServiceTypeViewOneComponent, 
    ServiceTypeAddOneComponent, 
    ServiceTypeAddMoreComponent, 
    ServiceTypeEditOneComponent, 
    ServiceTypeEditMoreComponent,

    IncludedServiceDashboadComponent, 
    IncludedServiceDashboadFooterComponent, 
    IncludedServiceViewAllComponent, 
    IncludedServiceViewOneComponent, 
    IncludedServiceAddOneComponent, 
    IncludedServiceAddMoreComponent, 
    IncludedServiceEditOneComponent, 
    IncludedServiceEditMoreComponent,

    ManagerOffersDashboadComponent, 
    ManagerOffersDashboadFooterComponent, 
    ManagerOffersViewAllComponent, 
    ManagerOffersViewOneComponent, 
    ManagerOffersAddOneComponent, 
    ManagerOffersAddMoreComponent, 
    ManagerOffersEditOneComponent, 
    ManagerOffersEditMoreComponent,

    ManagerDashboadComponent, 
    ManagerDashboadFooterComponent
  ]
})
export class ManagerModule { }
