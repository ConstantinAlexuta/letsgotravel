import { ManagerOffersService } from './../manager-offers.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manager-offers-add-one',
  templateUrl: './manager-offers-add-one.component.html',
  styleUrls: ['./manager-offers-add-one.component.scss']
})
export class ManagerOffersAddOneComponent implements OnInit {

  public offerFormGroup!: FormGroup;
  validMessage: string = "";

  constructor(
    private managerOffersService: ManagerOffersService
  ) {

   }

  ngOnInit(): void {

    this.offerFormGroup = new FormGroup({
      originalLgtUrl: new FormControl('https://letsgotravel.ro/oferta-item/sun-island-resort-spa-4-all-inclusive-revelion-2021/', Validators.required), // first is the default value
      destinationCountry: new FormControl('Maldives', Validators.required),
      destinationDistrict: new FormControl('original', Validators.required),
      destinationDistrictZone: new FormControl('original', Validators.required),
      destinationCity: new FormControl('Nalaguraidhoo', Validators.required),
      destinationCityZone: new FormControl('original', Validators.required),
      destinationHotelName: new FormControl('SUN ISLAND RESORT & SPA 4*', Validators.required),
      destinationHotelStars: new FormControl('4', Validators.required),
      destinationHotelServicesType: new FormControl('ALL INCLUSIVE – REVELION 2021', Validators.required),
      includedServicesPlaneTickets: new FormControl('true', Validators.required)
    });

    
  }

  onSubmit() {
    if(this.offerFormGroup.valid) {
      this.validMessage = "Your offer has been submitted.";
      this.managerOffersService.saveOffer(this.offerFormGroup.value).subscribe(
        data => {
          this.offerFormGroup.reset();
          this.isSavedSuccessfully = true;
          this.getSavedOfferId();
          this.savedOfferId = this.updatedOffers.size;
          return true;
        },
        error => {
          return Observable.throw(error);
        }
      )
    } else {
      this.validMessage = "Please fill out the required fields of the form before submitting!";
    }
  }

  isSavedSuccessfully: boolean = false;
  savedOfferId: number = -1;

  updatedOffers: any;
  
  getSavedOfferId() {
    this.managerOffersService.getOffers().subscribe(
      data => { this.updatedOffers = data },
      err => console.error(err),
      () => console.log('updatedOffers loaded to find the last offer saved id')
    );
  }


}
