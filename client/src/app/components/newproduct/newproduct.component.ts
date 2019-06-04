import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService) {
    this.product = {
      name: '',
      category: '',
      price:'',
      id: ''
    };
  }

  ngOnInit() {
  }
  newp() {
    this.productService.newp(this.product)
  }
  temp() {
    this.productService.temp();
  }

}
