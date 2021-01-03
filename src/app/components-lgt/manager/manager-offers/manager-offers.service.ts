import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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

  getOffers() {
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

}
