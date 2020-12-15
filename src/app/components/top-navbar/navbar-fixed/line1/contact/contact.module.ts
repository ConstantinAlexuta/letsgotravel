import { IconsAssociatedModule } from './../../../../icons-associated/icons-associated.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AskSomethingComponent } from './ask-something/ask-something.component';



@NgModule({
  declarations: [
    ContactComponent, 
    ContactFormComponent, 
    AskSomethingComponent
  ],
  imports: [
    CommonModule,
    IconsAssociatedModule,
    RouterModule.forChild([
          { path: 'contact-form', component: ContactFormComponent },
          { path: 'ask-something', component: AskSomethingComponent },
          { path: 'contact', component: ContactComponent }
      ])
  ],
  exports: [
    ContactComponent, 
    ContactFormComponent, 
    AskSomethingComponent
  ]
})
export class ContactModule { }
