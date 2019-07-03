import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from 'src/app/models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  product: Product;
  cart:Cart

  constructor(private cartService: CartService, private productService: ProductService) {
    this.cart={
      products:[]
    }
   }

  ngOnInit() {
    this.productService.getall().subscribe(res => {
      console.log(res);
      this.product = res;
    })
  }

  addtocart(product) {
    console.log(product);
    this.cartService.addtocart(product).subscribe(res => {
      console.log(res);
      alert('the product '+ this.product.name+ ' was saved in the cart');
    })
  }

  deletep(product){
    this.productService.deletep(product).subscribe(res => {
      console.log(res);
      console.log(product);
      this.getAllProducts();
    }, ()=>{
      console.log('errr');
    });
  };

  getAllProducts() {
    this.productService.getall().subscribe(res => {
      console.log(res);
      this.product = res;
    })
  }
};
