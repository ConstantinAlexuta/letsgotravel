import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataDashboadComponent } from './basic-data-dashboad/basic-data-dashboad.component';
import { RouterModule } from '@angular/router';
import { IncludedServiceAddMoreComponent } from './included-service/included-service-add-more/included-service-add-more.component';
import { IncludedServiceAddOneComponent } from './included-service/included-service-add-one/included-service-add-one.component';
import { IncludedServiceDashboadFooterComponent } from './included-service/included-service-dashboad-footer/included-service-dashboad-footer.component';
import { IncludedServiceDashboadComponent } from './included-service/included-service-dashboad/included-service-dashboad.component';
import { IncludedServiceEditMoreComponent } from './included-service/included-service-edit-more/included-service-edit-more.component';
import { IncludedServiceEditOneComponent } from './included-service/included-service-edit-one/included-service-edit-one.component';
import { IncludedServiceViewAllComponent } from './included-service/included-service-view-all/included-service-view-all.component';
import { IncludedServiceViewOneComponent } from './included-service/included-service-view-one/included-service-view-one.component';
import { IncludedServiceModule } from './included-service/included-service.module';
import { ServiceTypeAddMoreComponent } from './service-type/service-type-add-more/service-type-add-more.component';
import { ServiceTypeAddOneComponent } from './service-type/service-type-add-one/service-type-add-one.component';
import { ServiceTypeDashboadFooterComponent } from './service-type/service-type-dashboad-footer/service-type-dashboad-footer.component';
import { ServiceTypeDashboadComponent } from './service-type/service-type-dashboad/service-type-dashboad.component';
import { ServiceTypeEditMoreComponent } from './service-type/service-type-edit-more/service-type-edit-more.component';
import { ServiceTypeEditOneComponent } from './service-type/service-type-edit-one/service-type-edit-one.component';
import { ServiceTypeViewAllComponent } from './service-type/service-type-view-all/service-type-view-all.component';
import { ServiceTypeViewOneComponent } from './service-type/service-type-view-one/service-type-view-one.component';
import { ServiceTypeModule } from './service-type/service-type.module';
import { BasicDataDashboadFooterComponent } from './basic-data-dashboad-footer/basic-data-dashboad-footer.component';

@NgModule({
  declarations: [
    BasicDataDashboadComponent, 
    BasicDataDashboadFooterComponent
  ],
  imports: [
    CommonModule,

    ServiceTypeModule,
    IncludedServiceModule,

    RouterModule.forChild([
      { path: 'basic-data-dashboad', component: BasicDataDashboadComponent }
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
    IncludedServiceEditMoreComponent
  ]
})
export class BasicDataModule { }
