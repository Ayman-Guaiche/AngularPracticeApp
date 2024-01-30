import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  public getProducts():Observable<Array<Product>> {
    return this.http.get<Array<Product>>("http://localhost:8089/products");
  }
  public checkProducts(product:Product):Observable<Product>{
    return this.http.patch<any>(`http://localhost:8089/products/${product.id }` ,{checked:!product.checked})
  }
  public deleteProduct(product:Product):Observable<Product>{
    return this.http.delete<any>(`http://localhost:8089/products/${product.id }`)
  }
}
