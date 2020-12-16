import { ViewHomeCaruselBootstrapModule } from './../view-home-carusel-bootstrap/view-home-carusel-bootstrap.module';
import { ViewHomeCaruselModule } from './../view-home-carusel/view-home-carusel.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewHomeComponent } from './view-home.component';
import { ViewHomeCardsModule } from '../view-home-cards/view-home-cards.module';



@NgModule({
  declarations: [
    ViewHomeComponent
  ],
  imports: [
    CommonModule,
    ViewHomeCardsModule,
    ViewHomeCaruselModule,
    ViewHomeCaruselBootstrapModule
  ],
  exports: [
    ViewHomeComponent
  ]
})
export class ViewHomeModule { }
