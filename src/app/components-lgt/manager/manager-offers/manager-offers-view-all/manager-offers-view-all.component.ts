import { Component, OnInit } from '@angular/core';
import { Offer } from 'src/app/shared/interfaces/offer-interface';
import { ManagerOffersService } from '../manager-offers.service';

@Component({
  selector: 'app-manager-offers-view-all',
  templateUrl: './manager-offers-view-all.component.html',
  styleUrls: ['./manager-offers-view-all.component.scss']
})
export class ManagerOffersViewAllComponent implements OnInit {

  pageTitle: string = "View all offers";

  listFilter: string = "";

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

  showFirstPageImage: boolean = true;
  firstImageWidth: number = 50;
  firstImageMargin: number = 2;

  testOffer: Offer = {
    id: 0,
    originalLgtUrl: "string",
    firstImageUrl: "string",
    destinationCountry: "string",
    destinationDistrict: "string",
    destinationDistrictZone: "string",
    destinationCity: "string",
    destinationCityZone: "string",
    destinationHotelName: "string",
    destinationHotelStars: "string",
    destinationHotelServicesType: "string",
    includedServicesPlaneTickets: true
  };

  




}
