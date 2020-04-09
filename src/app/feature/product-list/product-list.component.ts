import { Component, OnInit } from '@angular/core';
import { AddProduct } from '../add-product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: AddProduct[];
  constructor() { }

  ngOnInit() {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

}
