import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, from } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Product } from '../models/product';

const ENDPOINT = 'product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {


  constructor(private httpClient: HttpClient) {
  }

  get(id?: string): Observable<Product[] | Product> {
    if (id) {
      let params = new HttpParams();
      params = params.append('id', id);

      return this.httpClient.get<Product>(environment.serverUri + ENDPOINT, {
        params: params
      });
    } else {
      return this.httpClient.get<Product[]>(environment.serverUri + ENDPOINT);
    }
  }

  newp(p: Product) {
    return this.httpClient.post<Product>('http://localhost:6789/nproduct', p);
  }

  temp(){
    return this.httpClient.get('http://localhost:6789/temp');
  }


  // newp(product: Product): Observable<Product> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json'
  //     })
  //   };
  //   return this.httpClient.post<Product>('http://localhost:6789/nproduct', product, httpOptions)
  //     .pipe(catchError(console.log('products', product)));
  // }
}