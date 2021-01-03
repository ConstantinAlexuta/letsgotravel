import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { ManagerOffersService } from '../manager-offers.service';

@Component({
  selector: 'app-manager-offers-view-all',
  templateUrl: './manager-offers-view-all.component.html',
  styleUrls: ['./manager-offers-view-all.component.scss']
})
export class ManagerOffersViewAllComponent implements OnInit {

  public offers!: any;

  constructor(
    private managerOffersService: ManagerOffersService
  ) { }

  ngOnInit(): void {
    this.getOffers();
  }

  async getOffers () {
    await this.managerOffersService.getOffers().subscribe(
      data => { this.offers = data },
      err => console.error(err),
      () => console.log('Offers loaded.')
    );
  }

}
