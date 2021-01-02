import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class IncludedServiceService {

constructor(
    private httpClient: HttpClient
  ) { }

  private path: string = "/server/api/v1/included-services";

  getIncludedServices() {
    return this.httpClient.get(this.path);
  }

  getIncludedService(id: number) {
    return this.httpClient.get(this.path + "/" + id);
  }

  createIncludedService(includedService: any) {
    let body = JSON.stringify(includedService);
    return this.httpClient.post(this.path, body,httpOptions);
  }

}