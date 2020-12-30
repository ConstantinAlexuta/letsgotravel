import { OffersPurchasedService } from './../offers-purchased.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-offer-purchased',
  templateUrl: './offer-purchased.component.html',
  styleUrls: ['./offer-purchased.component.scss']
})
export class OfferPurchasedComponent implements OnInit {

  public offerPurchased: any;

  constructor(
    private offersPurchasedService: OffersPurchasedService,
    private activatedRoute: ActivatedRoute
  ) { }

  async ngOnInit(): Promise<void> {
    // get the current route   :id
    await this.getOfferPurchased(this.activatedRoute.snapshot.params.id);
  }

  getOfferPurchased(id: number) {
    this.offersPurchasedService.getOfferPurchased(id).subscribe(
      data => { this.offerPurchased = data; },
      err => console.error(err),
      () => console.log('offerPurchased loaded')
    );
  }

}
