import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeCardsComponent } from './home-cards.component';



@NgModule({
  declarations: [
    HomeCardsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeCardsComponent
  ]
})
export class HomeCardsModule { }
