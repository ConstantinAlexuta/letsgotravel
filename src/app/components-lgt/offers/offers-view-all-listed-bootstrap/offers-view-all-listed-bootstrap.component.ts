import { Component, OnInit } from '@angular/core';
import { offers } from 'src/app/models/offers';

@Component({
  selector: 'app-offers-view-all-listed-bootstrap',
  templateUrl: './offers-view-all-listed-bootstrap.component.html',
  styleUrls: ['./offers-view-all-listed-bootstrap.component.scss']
})
export class OffersViewAllListedBootstrapComponent implements OnInit {

  offers = offers;
  

  
  constructor() { }

  ngOnInit(): void {
  }

}
