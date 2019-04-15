import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from '../models/product';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  
  private _cart: Cart;
  cart: BehaviorSubject<Cart>;

  constructor() {
    this._cart = {
      products: []
    };

    this.cart = new BehaviorSubject<Cart>(this._cart);
  }

  add(product: Product) {
    this._cart.products.push(product);
    this.cart.next(this._cart);
  }

  itemsInCart(): Observable<Cart> {
    return this.cart;
  }
}
