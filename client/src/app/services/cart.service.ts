import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private _cart: Cart;
  cart: BehaviorSubject<Cart>;

  constructor(private httpClient: HttpClient) {
    this._cart = {
      products: []
    };

    this.cart = new BehaviorSubject<Cart>(this._cart);
  }

  addtocart(p:Product) {
    return this.httpClient.post<any>('http://localhost:6789/nproduct',p)
  }

  itemsInCart(): Observable<Cart> {
    return this.cart;
  }
}
