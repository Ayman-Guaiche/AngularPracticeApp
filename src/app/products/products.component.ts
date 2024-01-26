import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
handleCheckProduct(product: any) {
    product.checked = !product.checked;
}
  products : Array<any> = [
    {id : 1, name : "computer" , price : 5000 , checked: false},
    {id : 2, name : "printer" , price : 6000 , checked: true},
    {id : 3, name : "phone" , price : 2000 , checked: false}
  ]
}
