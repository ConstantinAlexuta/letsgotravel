import { IconsAssociatedModule } from './../icons-associated/icons-associated.module';
import { FooterComponent } from './footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
