import { CardsModule } from './cards/cards.module';
import { CarouselModule } from './carousel/carousel.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
