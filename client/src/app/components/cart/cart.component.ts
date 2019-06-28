import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';
import { Product } from 'src/app/models/product';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) {
  }
  ngOnInit() {
    this.cart = this.cartService.itemsInCart();
    console.log(this.cart)
  }

  delete(product){
    // localStorage.removeItem(JSON.stringify(product));
    this.cartService.delete(product).subscribe(res => {
      console.log(res);
      this.cart = res;
    });
  }
} 
