import { Component, OnInit } from '@angular/core';
import { OffersPurchasedService } from '../offers-purchased.service';

@Component({
  selector: 'app-offers-purchased',
  templateUrl: './offers-purchased.component.html',
  styleUrls: ['./offers-purchased.component.scss']
})
export class OffersPurchasedComponent implements OnInit {

  public offersPurchased!: any;

  constructor(private offersPurchasedService: OffersPurchasedService) { }

  ngOnInit(): void {
    this.getOffersPurchased();
  }

  async getOffersPurchased() {
    await this.offersPurchasedService.getOffersPurchased().subscribe(
      data => { this.offersPurchased = data },
      err => console.error(err),
      () => console.log('offersPurchased loaded')
    );
  }

}
