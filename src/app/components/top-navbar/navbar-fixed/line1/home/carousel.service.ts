import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Image } from 'src/app/components/top-navbar/navbar-fixed/line1/home/carousel/image-interface';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  constructor(private httpClient: HttpClient) { }

  getImages() {
      return this.httpClient.get<any>('assets/lgt/data-json/carousel-photos.json')
        .toPromise()
        .then(res => <Image[]>res.data)
        .then(data => { return data; });
  }   

}
