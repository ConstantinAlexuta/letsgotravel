import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AskSomethingInfoComponent } from './ask-something-info/ask-something-info.component';
import { ContactFormModule } from './contact-form/contact-form.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { IconsAssociatedModule } from '../icons-associated/icons-associated.module';
import { ContactFooterComponent } from './contact-footer/contact-footer.component';
import { ContactMenuComponent } from './contact-menu/contact-menu.component';
import { ContactViewComponent } from './contact-view/contact-view.component';
import { ContactFooterThinComponent } from './contact-footer-thin/contact-footer-thin.component';

@NgModule({
  declarations: [
    AskSomethingInfoComponent,
    ContactViewComponent,
    ContactMenuComponent,
    ContactFooterComponent,
    ContactFooterThinComponent
  ],
  imports: [
    CommonModule,
    ContactFormModule,
    IconsAssociatedModule,

    RouterModule.forChild([
        { path: 'contact', component: ContactViewComponent }
  ])
  ],
  exports: [
    AskSomethingInfoComponent,
    ContactFormComponent,
    ContactViewComponent,
    ContactMenuComponent,
    ContactFooterComponent,
    ContactFooterThinComponent
  ]
})
export class ContactModule { }
