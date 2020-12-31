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

  // token: string = localStorage.getItem('access_token')!;
  // headersAuthorization = { headers: new HttpHeaders().set('Authorization', 'Bearer ' + this.token) };

  // // async 
  // getOffersPurchased() {
  //   // await
  //    return  this.httpClient.get(this.path, this.headersAuthorization);
  // }

  // getOfferPurchased(id: number) {
  //   return this.httpClient.get(this.path + "/" + id, this.headersAuthorization);
  // }

  getOffersPurchased() {
    let token = localStorage.getItem('access_token');
    return this.httpClient.get(this.path, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  getOfferPurchased(id: number) {
    let token = localStorage.getItem('access_token');
    return this.httpClient.get(this.path + "/" + id, {
      headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)
    });
  }

  createOfferPurchased(offerPurchased: any) {
    let body = JSON.stringify(offerPurchased);
    return this.httpClient.post(this.path, body, httpOptions);
  }

}
