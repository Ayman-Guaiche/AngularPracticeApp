import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<any> = [];
  constructor(private ps:ProductService){

  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.ps.getProducts()
      .subscribe({
        next:data => {this.products = data},
        error:err => {console.log(err);}
      })
    ;
  }
  handleCheckProduct(product: any) {
    this.ps.checkProducts(product)
    .subscribe({next:updatedProduct => {
      this.getProducts();
    }
  }
  )
  }
  
}
