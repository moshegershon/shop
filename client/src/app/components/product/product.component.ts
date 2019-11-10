import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from 'src/app/models/cart';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input()
  products: Product[];
  ;

  constructor(
    private cartService: CartService,
    private productService: ProductService,
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  addToCart(product,total) {
    total+=product.price;
    this.cartService.addToCart(product).subscribe((res: Cart) => {
      console.log(res);
      alert('the product ' + product.name + ' was saved in the cart');
    });
  }

  deletep(product) {
    if (confirm('are you sure you want to remove this product from your list')) {
      this.productService.deletep(product).subscribe(res => {
        console.log(res);
        console.log(product);
        this.getAllProducts();
      }, () => {
        console.log('errr');
      });
    } else {

    }
  }

  getAllProducts() {
    this.productService.getall().subscribe((res: any) => {
      console.log(res);
      this.products = res;
    });
  }

  get isLoggedIn(): boolean {
    return !!this.userService.currentUserValue;
  }
}
