import { OffersPurchasedService } from './../offers-purchased.service';
import { Component, OnInit, Directive } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-offer-to-purchased',
  templateUrl: './add-offer-to-purchased.component.html',
  styleUrls: ['./add-offer-to-purchased.component.scss']
})
export class AddOfferToPurchasedComponent implements OnInit {

  offerTypes: string[] = [
    'Revelion',
    'Exotic',
    'Jungla',
    'Litoral',
    'Other'
  ];

  public offerToPurchaseForm!: FormGroup;
  validMessage: string = "";

  constructor(private offersPurchasedService: OffersPurchasedService) { }

  ngOnInit(): void {
    this.offerToPurchaseForm = new FormGroup({
      firstName: new FormControl('first name', Validators.required),  // first is the default value
      lastName: new FormControl('last name', Validators.required),
      email: new FormControl('email', Validators.required),
      phone: new FormControl('phone', Validators.required),
      offerType: new FormControl('offerType'),
      offerID: new FormControl('offerID'),
      offerTitle: new FormControl('offerTitle'),
      offerDestinationCountry: new FormControl('offerDestinationCountry'),
      offerDestinationCity: new FormControl('offerDestinationCity'),
      offerDestinationHotel: new FormControl('offerDestinationHotel'),
      offerDestinationServicesIncluded: new FormControl('offerDestinationServicesIncluded'),
      offerStartDate: new FormControl('11.11.2022'),
      offerEndDate: new FormControl('11.11.2022'),
      purchasePricePerPerson: new FormControl('1200'),
      purchasePriceTotal: new FormControl('2400'),
      purchaseDate: new FormControl('11.11.2020'),
      requestToBeCalledOnPhone: new FormControl('false')
    });
  }

  onSubmit() {
    if(this.offerToPurchaseForm.valid) {
      this.validMessage = "Your offer purchase has been submitted. We will come back to you on email and/or phone! Thank you!";
      this.offersPurchasedService.createOfferPurchased(this.offerToPurchaseForm.value).subscribe(
        data => {
          this.offerToPurchaseForm.reset();
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

}
