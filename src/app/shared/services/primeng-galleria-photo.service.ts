import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Image } from './../../shared/interfaces/image-interface';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrimengGalleriaPhotoService {

  constructor(private http: HttpClient) { }

    // getImages() {
    // return this.http.get<any>('src/app/shared/data-json/primeng-galleria-photo.json')
    //   .toPromise()
    //   .then(res => <Image[]>res.data)
    //   .then(data => { return data; });
    // }

     //   getImages() {
  //   return this.http.get<any>('src/app/shared/data-json/primeng-galleria-photo.json').subscribe(
  //     data => { this.visitors = data },
  //     err => console.error(err),
  //     () => console.log('visitors loaded')
  //   );
  // }

    //     getImages(): Observable<Image[]> {
    // return this.http.get<any>('src/app/shared/data-json/primeng-galleria-photo.json')
    //   .toPromise()
    //   .then(res => <Image[]>res.data)
    //   .then(data => { return data; });
    // }

  public images!: Image[];

//   ngOnInit() {
//       this.productService.getImages().subscribe(
//           res => { this.images = res; }
//         );
//   }
// }
    //         getImages(): Observable<Image[]> {
    // return this.http.get<any>('src/app/shared/data-json/primeng-galleria-photo.json')
    //   .toPromise()
    //   .then(res => <Image[]>res.data)
    //   .then(data => { return data; });
    // }


 


}
