import { RouterModule } from '@angular/router';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild([
      
    ])
  ]
})
export class HomeModule { }
