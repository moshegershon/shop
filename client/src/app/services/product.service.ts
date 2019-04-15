import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

const ENDPOINT = 'product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private httpClient: HttpClient) { }

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
}
