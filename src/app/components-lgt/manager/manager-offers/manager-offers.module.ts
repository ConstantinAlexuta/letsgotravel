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



@NgModule({
  declarations: [
    ManagerOffersDashboadComponent, 
    ManagerOffersDashboadFooterComponent, 
    ManagerOffersViewAllComponent, 
    ManagerOffersViewOneComponent, 
    ManagerOffersAddOneComponent, 
    ManagerOffersAddMoreComponent, 
    ManagerOffersEditOneComponent, 
    ManagerOffersEditMoreComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: 'manager-offers-dashboad', component: ManagerOffersDashboadComponent },        
      { path: 'manager-offers/new-one', component: ManagerOffersAddOneComponent },
      { path: 'manager-offers/new-more', component: ManagerOffersAddMoreComponent },
      { path: 'manager-offers/:id/edit', component: ManagerOffersEditOneComponent },
      { path: 'manager-offers/:id', component: ManagerOffersViewOneComponent },
      { path: 'manager-offers/edit', component: ManagerOffersEditMoreComponent },
      { path: 'manager-offers', component: ManagerOffersViewAllComponent }
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
    ManagerOffersEditMoreComponent
  ]
})
export class ManagerOffersModule { }
