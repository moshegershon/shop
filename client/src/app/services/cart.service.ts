import {Injectable} from '@angular/core';
import {Cart} from '../models/cart';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { totalmem } from 'os';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart: Cart;
  price:number;

  // cart: BehaviorSubject<Cart>;

  constructor(private httpClient: HttpClient) {
    this._cart = {
      products: []
    };
    // this.cart = new BehaviorSubject<Cart>(this._cart);
  }
  

  total(price:number){
    console.log(this.price)
    console.log(typeof price)
    this.price+=price
    return this.price
    
  }  

  addToCart(product: Product): Observable<Cart>{
    this.total(product.price)
    this._cart.products.push(product);
    // this.cart.next(this._cart);
    localStorage.setItem('itemsincart', JSON.stringify(this._cart));
    return  new Observable(observer => {
      observer.next(JSON.parse(localStorage.getItem('itemsincart')));
    });
  }

  itemsInCart() {
    this._cart = JSON.parse(localStorage.getItem('itemsincart'));
    return this._cart;
  }

  refresh(): void {
    window.location.reload();
}
  checkout() {
    localStorage.clear();
    this.refresh();
  }

  delete(product): Observable<Cart> {
    this.price=NaN;
    console.log(this._cart.products);
    this._cart.products = this._cart.products.filter(item => item._id !== product._id);
    console.log(this._cart.products);
    localStorage.setItem('itemsincart', JSON.stringify(this._cart));
    return new Observable(observer => {
      observer.next(JSON.parse(localStorage.getItem('itemsincart')));
    });
  }
}
