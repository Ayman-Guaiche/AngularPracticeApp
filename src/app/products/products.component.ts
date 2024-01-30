import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from 'model/product.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  handleDelete(product: Product) {
    if(confirm("Etes vous sûr ?"))
    this.ps.deleteProduct(product).subscribe({
      next: value =>{ this.products = this.products.filter(p => p.id != product.id)
      }
    });
    
  
}
  products : Array<Product> = []
  constructor(private ps:ProductService){

  }
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    //this.products$ = this.ps.getProducts().pipe();
    this.ps.getProducts()
       .subscribe({
         next:data => {this.products = data},
        error:err => {console.log(err);}
    })
    
  }
  handleCheckProduct(product: Product) {
    
    
    this.ps.checkProducts(product)
    .subscribe({next:updatedProduct => {
      this.getProducts();
    }
  }
  )
  }
  
}
