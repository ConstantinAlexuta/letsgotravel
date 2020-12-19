import { Component, OnInit } from '@angular/core';
import { offers } from 'src/app/models/offers';

@Component({
  selector: 'app-offers-view',
  templateUrl: './offers-view.component.html',
  styleUrls: ['./offers-view.component.scss']
})
export class OffersViewComponent implements OnInit {



offers = offers;
  

   

  constructor() { }

  ngOnInit(): void {
  }

}
