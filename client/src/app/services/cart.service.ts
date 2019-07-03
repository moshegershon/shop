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
  // cart: BehaviorSubject<Cart>;

  constructor(private httpClient: HttpClient) {
    this._cart = {
      products: []
    };
    // this.cart = new BehaviorSubject<Cart>(this._cart);
  }

  addtocart(product: Product):Observable<Cart> {
    this._cart.products.push(product);
    // this.cart.next(this._cart);
    localStorage.setItem('itemsincart',JSON.stringify(this._cart));
    return JSON.parse(localStorage.getItem('itemsincart'));
  }

  itemsInCart() {
    this._cart = JSON.parse(localStorage.getItem('itemsincart'));
    return this._cart;
  }
  checkout(){
    localStorage.clear();
  }

  delete(product):Observable<Cart>{   
    console.log(this._cart.products);
    this._cart.products = this._cart.products.filter( item => item._id != product._id);
    console.log(this._cart.products);
    localStorage.setItem('itemsincart',JSON.stringify(this._cart));
    return JSON.parse(localStorage.getItem('itemsincart'));
  }
}
