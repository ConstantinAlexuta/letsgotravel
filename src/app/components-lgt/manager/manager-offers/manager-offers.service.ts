import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Offer } from 'src/app/shared/interfaces/offer-interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ManagerOffersService {

  constructor(
    private httpClient: HttpClient
  ) {

   }

  private path: string = "/server/api/v1/offers";

  getOffers(): Observable<Offer> {
    return this.httpClient.get(this.path);
  }

  getOffer(id: number) {
    return this.httpClient.get(this.path + "/" + id);
  }

  saveOffer(offer: any) {
    let body = JSON.stringify(offer);
    return this.httpClient.post(this.path, body, httpOptions);
  }

  // to be tested
  saveOffers(offers: any[]) {
    offers.forEach(offer => {
      let body = JSON.stringify(offer);
      this.httpClient.post(this.path, body, httpOptions);
    });
  }

  deleteOffer(id: number) {
    console.log('in ManagerOffersService: offer with id = ' + id + ' was deleted');
    return this.httpClient.delete(this.path + "/" + id, httpOptions);
    
  }

}
