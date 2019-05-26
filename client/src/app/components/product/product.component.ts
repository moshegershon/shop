import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() 
  product: Product;

  constructor(private cartService: CartService)  { }

  ngOnInit() {
    
  }

  add() {
    this.cartService.add(this.product);
  }

  
}
