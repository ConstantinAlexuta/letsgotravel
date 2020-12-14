import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselNgBootstrapComponent } from './carousel-ng-bootstrap.component';


@NgModule({
  declarations: [CarouselNgBootstrapComponent],
  imports: [
    CommonModule
    
  ],
  exports: [
    CarouselNgBootstrapComponent
  ]
})
export class CarouselNgBootstrapModule { }
