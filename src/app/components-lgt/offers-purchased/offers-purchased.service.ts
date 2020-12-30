import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// HttpClient will make the call to server and will return 
// an Observable which is a promise that will come back from server

// we say we want to deal with application json or json payload
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OffersPurchasedService {

  constructor(private httpClient: HttpClient) { }

  private path: string = "/server/api/v1/offers-purchased";

  getOffersPurchased() {
    return this.httpClient.get(this.path);
  }

  getOfferPurchased(id: number) {
    return this.httpClient.get(this.path + "/" + id);
  }

  createOfferPurchased(offerPurchased: any) {
    let body = JSON.stringify(offerPurchased);
    return this.httpClient.post(this.path, body, httpOptions);
  }

}
