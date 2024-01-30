import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  public productForm!: FormGroup;
  constructor(private fb:FormBuilder){

  }
  ngOnInit() {
    this.productForm = this.fb.group({
      name: this.fb.control(''),
      price: this.fb.control(''),
      checked: this.fb.control(false)
    })
  }
}
