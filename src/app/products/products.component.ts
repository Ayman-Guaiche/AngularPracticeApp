import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : Array<any> = [];
  constructor(private http:HttpClient){

  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    this.http.get<Array<any>>("http://localhost:8089/products")
      .subscribe({
        next:data => {this.products = data},
        error:err => {console.log(err);}
      })
    ;
  }
  handleCheckProduct(product: any) {
    this.http.patch<any>(`http://localhost:8089/products/${product.id }` ,{checked:!product.checked})
    .subscribe({next:updatedProduct => {
      this.getProducts();
    }
  }
  )
  }
  
}
