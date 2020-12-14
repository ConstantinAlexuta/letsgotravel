import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselBootstrapComponent } from './carousel-bootstrap.component';



@NgModule({
  declarations: [CarouselBootstrapComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CarouselBootstrapComponent
  ]
})
export class CarouselBootstrapModule { }
