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
import { DestinationCategoryAddMoreComponent } from './destination-category/destination-category-add-more/destination-category-add-more.component';
import { DestinationCategoryAddOneComponent } from './destination-category/destination-category-add-one/destination-category-add-one.component';
import { DestinationCategoryDashboadFooterComponent } from './destination-category/destination-category-dashboad-footer/destination-category-dashboad-footer.component';
import { DestinationCategoryDashboadComponent } from './destination-category/destination-category-dashboad/destination-category-dashboad.component';
import { DestinationCategoryEditMoreComponent } from './destination-category/destination-category-edit-more/destination-category-edit-more.component';
import { DestinationCategoryEditOneComponent } from './destination-category/destination-category-edit-one/destination-category-edit-one.component';
import { DestinationCategoryViewAllComponent } from './destination-category/destination-category-view-all/destination-category-view-all.component';
import { DestinationCategoryViewOneComponent } from './destination-category/destination-category-view-one/destination-category-view-one.component';
import { DestinationCategoryModule } from './destination-category/destination-category.module';

@NgModule({
  declarations: [
    BasicDataDashboadComponent, 
    BasicDataDashboadFooterComponent
  ],
  imports: [
    CommonModule,

    DestinationCategoryModule,
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
    IncludedServiceEditMoreComponent,
     
    DestinationCategoryDashboadComponent, 
    DestinationCategoryDashboadFooterComponent, 
    DestinationCategoryViewAllComponent, 
    DestinationCategoryViewOneComponent, 
    DestinationCategoryAddOneComponent, 
    DestinationCategoryAddMoreComponent, 
    DestinationCategoryEditOneComponent, 
    DestinationCategoryEditMoreComponent
  ]
})
export class BasicDataModule { }
