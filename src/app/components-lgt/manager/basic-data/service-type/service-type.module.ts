import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceTypeDashboadComponent } from './service-type-dashboad/service-type-dashboad.component';
import { ServiceTypeDashboadFooterComponent } from './service-type-dashboad-footer/service-type-dashboad-footer.component';
import { ServiceTypeViewAllComponent } from './service-type-view-all/service-type-view-all.component';
import { ServiceTypeViewOneComponent } from './service-type-view-one/service-type-view-one.component';
import { ServiceTypeAddOneComponent } from './service-type-add-one/service-type-add-one.component';
import { ServiceTypeAddMoreComponent } from './service-type-add-more/service-type-add-more.component';
import { ServiceTypeEditOneComponent } from './service-type-edit-one/service-type-edit-one.component';
import { ServiceTypeEditMoreComponent } from './service-type-edit-more/service-type-edit-more.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServiceTypeDashboadComponent, 
    ServiceTypeDashboadFooterComponent, 
    ServiceTypeViewAllComponent, 
    ServiceTypeViewOneComponent, 
    ServiceTypeAddOneComponent, 
    ServiceTypeAddMoreComponent, 
    ServiceTypeEditOneComponent, 
    ServiceTypeEditMoreComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { 
        path: 'service-type-dashboad', 
        component: ServiceTypeDashboadComponent,
        children: [
          { path: 'service-types/new-one', component: ServiceTypeAddOneComponent },
          { path: 'service-types/new-more', component: ServiceTypeAddMoreComponent },
          { path: 'service-types/:id/edit', component: ServiceTypeEditOneComponent },
          { path: 'service-types/:id', component: ServiceTypeViewOneComponent },
          { path: 'service-types/edit', component: ServiceTypeEditMoreComponent },
          { path: 'service-types', component: ServiceTypeViewAllComponent }
        ]
      },        
    ])
  ],
  exports: [
    ServiceTypeDashboadComponent, 
    ServiceTypeDashboadFooterComponent, 
    ServiceTypeViewAllComponent, 
    ServiceTypeViewOneComponent, 
    ServiceTypeAddOneComponent, 
    ServiceTypeAddMoreComponent, 
    ServiceTypeEditOneComponent, 
    ServiceTypeEditMoreComponent
  ]
})
export class ServiceTypeModule { }
