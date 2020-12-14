import { CardsModule } from './cards/cards.module';
import { CarouselModule } from './carousel/carousel.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { PrimengGalleriaIndicatorModule } from './primeng-galleria-indicator/primeng-galleria-indicator.module';
import { CarouselNgBootstrapModule } from './carousel-ng-bootstrap/carousel-ng-bootstrap.module';
import { CarouselBootstrapModule } from './carousel-bootstrap/carousel-bootstrap.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    CarouselModule,
    CardsModule,

    PrimengGalleriaIndicatorModule,
    CarouselNgBootstrapModule,
    CarouselBootstrapModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
