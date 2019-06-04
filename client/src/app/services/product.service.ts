import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, from, observable} from 'rxjs';
import { catchError } from 'rxjs/operators'
import { Product } from '../models/product';

const ENDPOINT = 'product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private product: Product;

  constructor(public httpClient: HttpClient) {
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
  getall(): Observable<Product>{
    return this.httpClient.get<Product>('http://localhost:6789/product')
  }

  newp(p: Product) {
    return this.httpClient.post<Product>('http://localhost:6789/nproduct', p).subscribe(res=>{
      debugger;
    });
  }

  temp(){
    return this.httpClient.get('http://localhost:6789/temp').subscribe(res => {
      debugger;
    });
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