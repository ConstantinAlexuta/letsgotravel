import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { IconsAssociatedModule } from '../icons-associated/icons-associated.module';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    IconsAssociatedModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
