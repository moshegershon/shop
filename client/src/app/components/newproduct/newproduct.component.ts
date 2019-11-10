import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewproductComponent implements OnInit {

  product: Product;
  @ViewChild ('nameRef') nameElementRef:ElementRef

  constructor(private productService: ProductService) {
    this.product = {
      _id: '',
      name: '',
      category: '',
      // needs to be a number but stays string
      price:5,
      id: ''
    };
  }

  ngOnInit() {
  }
  newp() {
    if(confirm('are you sure you want to save the product '+this.product.name)){
    this.productService.newp(this.product);
  }
  else{

  }
    
  }
  ngAfterViewInit(){
    this.nameElementRef.nativeElement.focus();
  }

}
