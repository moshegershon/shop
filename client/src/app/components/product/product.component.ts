import {Component, OnInit, Input} from '@angular/core';
import {Product} from 'src/app/models/product';
import {CartService} from 'src/app/services/cart.service';
import {ProductService} from 'src/app/services/product.service';
import {Cart} from 'src/app/models/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[];

  constructor(
    private cartService: CartService,
    private productService: ProductService,
  ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  addToCart(product) {
    console.log(product);
    this.cartService.addToCart(product).subscribe((res: Cart) => {
      console.log(res);
      alert('the product ' + product.name + ' was saved in the cart');
    });
  }

  deletep(product) {
    this.productService.deletep(product).subscribe(res => {
      console.log(res);
      console.log(product);
      this.getAllProducts();
    }, () => {
      console.log('errr');
    });
  }

  getAllProducts() {
    this.productService.getall().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }
}
