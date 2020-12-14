import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/galleria';

import { PrimengGalleriaIndicatorComponent } from './primeng-galleria-indicator.component';



@NgModule({
  declarations: [PrimengGalleriaIndicatorComponent],
  imports: [
    CommonModule,
    GalleriaModule
  ],
  exports: [
    PrimengGalleriaIndicatorComponent
  ]
})
export class PrimengGalleriaIndicatorModule { }
