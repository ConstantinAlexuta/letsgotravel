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

@NgModule({
  declarations: [
    AskSomethingInfoComponent,
    ContactViewComponent,
    ContactMenuComponent,
    ContactFooterComponent
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
    ContactFooterComponent
  ]
})
export class ContactModule { }
