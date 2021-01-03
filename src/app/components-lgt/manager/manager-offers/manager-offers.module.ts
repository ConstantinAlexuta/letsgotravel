import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManagerOffersDashboadComponent } from './manager-offers-dashboad/manager-offers-dashboad.component';
import { ManagerOffersDashboadFooterComponent } from './manager-offers-dashboad-footer/manager-offers-dashboad-footer.component';
import { ManagerOffersViewAllComponent } from './manager-offers-view-all/manager-offers-view-all.component';
import { ManagerOffersViewOneComponent } from './manager-offers-view-one/manager-offers-view-one.component';
import { ManagerOffersAddOneComponent } from './manager-offers-add-one/manager-offers-add-one.component';
import { ManagerOffersAddMoreComponent } from './manager-offers-add-more/manager-offers-add-more.component';
import { ManagerOffersEditOneComponent } from './manager-offers-edit-one/manager-offers-edit-one.component';
import { ManagerOffersEditMoreComponent } from './manager-offers-edit-more/manager-offers-edit-more.component';
import { RouterModule } from '@angular/router';
import { ManagerOffersViewAllFooterComponent } from './manager-offers-view-all-footer/manager-offers-view-all-footer.component';
import { ManagerOffersAddOneFooterComponent } from './manager-offers-add-one-footer/manager-offers-add-one-footer.component';
import { ManagerOffersAddMoreFooterComponent } from './manager-offers-add-more-footer/manager-offers-add-more-footer.component';
import { ManagerOffersEditOneFooterComponent } from './manager-offers-edit-one-footer/manager-offers-edit-one-footer.component';
import { ManagerOffersEditMoreFooterComponent } from './manager-offers-edit-more-footer/manager-offers-edit-more-footer.component';
import { ManagerOffersViewOneFooterComponent } from './manager-offers-view-one-footer/manager-offers-view-one-footer.component';



@NgModule({
  declarations: [
    ManagerOffersDashboadComponent, 
    ManagerOffersDashboadFooterComponent, 
    ManagerOffersViewAllComponent, 
    ManagerOffersViewOneComponent, 
    ManagerOffersAddOneComponent, 
    ManagerOffersAddMoreComponent, 
    ManagerOffersEditOneComponent, 
    ManagerOffersEditMoreComponent, 

    ManagerOffersViewAllFooterComponent, 
    ManagerOffersAddOneFooterComponent, 
    ManagerOffersAddMoreFooterComponent, 
    ManagerOffersEditOneFooterComponent, 
    ManagerOffersEditMoreFooterComponent, 
    ManagerOffersViewOneFooterComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'manager-offers-dashboad', component: ManagerOffersDashboadComponent },     
         
      { path: 'manager-offers/new-one', component: ManagerOffersAddOneComponent },
      { path: 'manager-offers/new-more', component: ManagerOffersAddMoreComponent },

      { path: 'manager-offers/edit', component: ManagerOffersEditMoreComponent },
      { path: 'manager-offers/:id/edit', component: ManagerOffersEditOneComponent },
      
      { path: 'manager-offers', component: ManagerOffersViewAllComponent },
      { path: 'manager-offers/:id', component: ManagerOffersViewOneComponent }
    ])
  ],
  exports: [
    ManagerOffersDashboadComponent, 
    ManagerOffersDashboadFooterComponent, 
    ManagerOffersViewAllComponent, 
    ManagerOffersViewOneComponent, 
    ManagerOffersAddOneComponent, 
    ManagerOffersAddMoreComponent, 
    ManagerOffersEditOneComponent, 
    ManagerOffersEditMoreComponent, 

    ManagerOffersViewAllFooterComponent, 
    ManagerOffersAddOneFooterComponent, 
    ManagerOffersAddMoreFooterComponent, 
    ManagerOffersEditOneFooterComponent, 
    ManagerOffersEditMoreFooterComponent, 
    ManagerOffersViewOneFooterComponent
  ]
})
export class ManagerOffersModule { }
