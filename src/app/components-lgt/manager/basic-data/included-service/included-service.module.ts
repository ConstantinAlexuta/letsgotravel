import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncludedServiceDashboadComponent } from './included-service-dashboad/included-service-dashboad.component';
import { IncludedServiceDashboadFooterComponent } from './included-service-dashboad-footer/included-service-dashboad-footer.component';
import { IncludedServiceViewAllComponent } from './included-service-view-all/included-service-view-all.component';
import { IncludedServiceViewOneComponent } from './included-service-view-one/included-service-view-one.component';
import { IncludedServiceAddOneComponent } from './included-service-add-one/included-service-add-one.component';
import { IncludedServiceAddMoreComponent } from './included-service-add-more/included-service-add-more.component';
import { IncludedServiceEditOneComponent } from './included-service-edit-one/included-service-edit-one.component';
import { IncludedServiceEditMoreComponent } from './included-service-edit-more/included-service-edit-more.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    IncludedServiceDashboadComponent, 
    IncludedServiceDashboadFooterComponent, 
    IncludedServiceViewAllComponent, 
    IncludedServiceViewOneComponent, 
    IncludedServiceAddOneComponent, 
    IncludedServiceAddMoreComponent, 
    IncludedServiceEditOneComponent, 
    IncludedServiceEditMoreComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'included-service-dashboad', component: IncludedServiceDashboadComponent },        
      { path: 'included-services/new-one', component: IncludedServiceAddOneComponent },
      { path: 'included-services/new-more', component: IncludedServiceAddMoreComponent },
      { path: 'included-services/:id/edit', component: IncludedServiceEditOneComponent },
      { path: 'included-services/:id', component: IncludedServiceViewOneComponent },
      { path: 'included-services/edit', component: IncludedServiceEditMoreComponent },
      { path: 'included-services', component: IncludedServiceViewAllComponent }
    ])
  ],
  exports: [
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
export class IncludedServiceModule { }
