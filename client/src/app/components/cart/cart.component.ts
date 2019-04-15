import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.itemsInCart().subscribe(cartRes => {
      this.cart = cartRes;
    })
  }

}
