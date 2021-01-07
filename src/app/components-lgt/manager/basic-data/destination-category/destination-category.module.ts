import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DestinationCategoryDashboadComponent } from './destination-category-dashboad/destination-category-dashboad.component';
import { DestinationCategoryDashboadFooterComponent } from './destination-category-dashboad-footer/destination-category-dashboad-footer.component';
import { DestinationCategoryViewAllComponent } from './destination-category-view-all/destination-category-view-all.component';
import { DestinationCategoryViewOneComponent } from './destination-category-view-one/destination-category-view-one.component';
import { DestinationCategoryAddOneComponent } from './destination-category-add-one/destination-category-add-one.component';
import { DestinationCategoryAddMoreComponent } from './destination-category-add-more/destination-category-add-more.component';
import { DestinationCategoryEditOneComponent } from './destination-category-edit-one/destination-category-edit-one.component';
import { DestinationCategoryEditMoreComponent } from './destination-category-edit-more/destination-category-edit-more.component';
import { RouterModule } from '@angular/router';
import { DestinationCategoryViewOneDashboardComponent } from './destination-category-view-one-dashboard/destination-category-view-one-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DestinationCategoryDashboadComponent, 
    DestinationCategoryDashboadFooterComponent, 
    DestinationCategoryAddOneComponent, 
    DestinationCategoryAddMoreComponent, 
    DestinationCategoryEditOneComponent, 
    DestinationCategoryEditMoreComponent, 
    DestinationCategoryViewAllComponent, 
    DestinationCategoryViewOneComponent, 
    DestinationCategoryViewOneDashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forChild([
      {
        path: 'destination-category', 
        component: DestinationCategoryDashboadComponent,
        // redirectTo: 'destination-categories-view-all',
        children: [
          {
            path:'',
            redirectTo: 'view-all',
            pathMatch: 'full' 
          },
          { 
            path: 'add-more', 
            component: DestinationCategoryAddMoreComponent
          },
          { 
            path: 'add-one', 
            component: DestinationCategoryAddOneComponent
          },
          { 
            path: 'view-all', 
            component: DestinationCategoryViewAllComponent
          },
          { 
            path: 'view-one/:id', 
            component: DestinationCategoryViewOneDashboardComponent,
            children: [
                        {
                          path:'',
                          redirectTo: 'view',
                          pathMatch: 'full' 
                        },
                        { 
                          path: 'view', 
                          component: DestinationCategoryViewOneComponent
                        },
                        { 
                          path: 'next/:id', 
                          component: DestinationCategoryViewOneComponent
                        },
                        { 
                          path: 'edit', 
                          component: DestinationCategoryEditOneComponent
                        }
            ]
          },
          { 
            path: 'edit-more', 
            component: DestinationCategoryEditMoreComponent
          }
          
          // { 
          //   path: 'edit-one/:id', 
          //   component: DestinationCategoryEditOneComponent
          // }          
        ]
      }
    ])    
  ],
  exports: [
    DestinationCategoryDashboadComponent, 
    DestinationCategoryDashboadFooterComponent, 
    DestinationCategoryViewAllComponent, 
    DestinationCategoryViewOneComponent, 
    DestinationCategoryAddOneComponent, 
    DestinationCategoryAddMoreComponent, 
    DestinationCategoryEditOneComponent, 
    DestinationCategoryEditMoreComponent, 
    DestinationCategoryViewOneDashboardComponent
  ]
})
export class DestinationCategoryModule { }
