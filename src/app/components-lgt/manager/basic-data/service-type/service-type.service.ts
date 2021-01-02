import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

  constructor(
    private httpClient: HttpClient
  ) { 
    
  }

  private path: string = "/server/api/v1/service-type";

  getTypesServices() {
    return this.httpClient.get(this.path);
  }

  getTypeService(id: number) {
    return this.httpClient.get(this.path + "/" + id);
  }

  createTypeService(typeService: any) {
    let body = JSON.stringify(typeService);
    return this.httpClient.post(this.path, body,httpOptions);
  }

}