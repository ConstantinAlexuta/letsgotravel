import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperAdminComponent } from './super-admin.component';



@NgModule({
  declarations: [SuperAdminComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SuperAdminComponent
  ]
})
export class SuperAdminModule { }
