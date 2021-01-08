import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DestinationCategory } from 'src/app/shared/interfaces/destination-category';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class DestinationCategoryService {
  // destinationCategory!: DestinationCategory;

  private path: string = '/server/api/v1/destination-category';

  constructor(private httpClient: HttpClient) {}

  // getDestinationCategories() {
  //   return this.httpClient.get(this.path);
  // }

  getDestinationCategories() {
    return this.httpClient.get<DestinationCategory[]>(this.path);
  }

  getDestinationCategory(id: number) {
    return this.httpClient.get(this.path + '/' + id);
  }

  // createDestinationCategory(destinationCategory: any) {
  //   let body = JSON.stringify(destinationCategory);
  //   return this.httpClient.post(this.path, body, httpOptions);
  // }

  async createDestinationCategory(destinationCategory: DestinationCategory) {
    // let body = JSON.stringify(destinationCategory);
    // return this.httpClient.post(this.path, body, httpOptions);
    return await this.httpClient
      .post(this.path, destinationCategory, httpOptions)
      .toPromise();
  }

  getDestinationCategoryById(id: number) {
    return this.httpClient.get<DestinationCategory>(
      this.path + '/' + id,
      httpOptions
    );
  }

  replaceDestinationCategory(id: number, destinationCategory: any) {
    let body = JSON.stringify(destinationCategory);
    return this.httpClient
      .put(this.path + '/' + id, body, httpOptions)
      .subscribe(
        (data) => {},
        (err) => console.error(err),
        () => console.log('updated success')
      );
  }

  updateDestinationCategory(id: number, destinationCategory: any) {
    let body = JSON.stringify(destinationCategory);
    return this.httpClient
      .put(this.path + '/' + id, body, httpOptions)
      .subscribe(
        (data) => {
          return data;
        },
        (err) => console.error(err),
        () => console.log('updated success')
      );
  }

  public async deleteDestinationCategory(id: number) {
    // return this.httpClient.delete(this.path + "/" + id, httpOptions);
    // return this.httpClient.delete(this.path + "/" + id);

    // return this.httpClient.delete('/server/api/v1/destination-category/2');
    console.log(
      'in DestinationCategoryService >> in deleteDestinationCategory(id: number) method >> BEFORE httpClient delete request'
    );
    // return await this.httpClient.request(
    //   'delete',
    //   '/server/api/v1/destination-category/13',
    //   httpOptions
    // );

    return this.httpClient
      .delete(this.path + '/' + id, httpOptions)
      .subscribe(() =>
        console.log('item ' + this.path + '/' + id + ' was deleted')
      );
  }

  delete_DestinationCategory(id: number) {
    return this.httpClient.delete(this.path + '/' + id);
  }

  //   async delete_DestinationCategory(id: number) {
  //   return  this.httpClient.delete(this.path + "/" + id, httpOptions);
  // }

  //   deleteTraveller(id: number):Observable<any>{
  //    return this.httpClient.delete<DestinationCategory>(this.path + "/" + id)
  //    .pipe(
  //      catchError( (error: HttpErrorResponse) => {
  //        return new ErrorObservable(`Error deleting travellers data. ${error.statusText || 'Unknown'} `);
  //      }));
  //  }
}
