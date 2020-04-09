import { Component, OnInit, ViewChild } from '@angular/core';
import { AddProduct } from '../add-product.model';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  formData: AddProduct[] = [{ category: "", description: "", price: 0, name: "", imgUrl: "", phoneNumber: "", phoneType: "" }];
  formSubmitted = false;
  private product: AddProduct[];
  public maxProductError = false;
  constructor() { }

  ngOnInit(): void {

  }

  addProduct(): void {
    this.formSubmitted = false;
    if (this.formData.length < 5) {
      this.formData.push({
        category: "",
        description: "",
        price: 0,
        name: "",
        imgUrl: "",
        phoneNumber: "",
        phoneType: ""
      });
    } else {
      this.maxProductError = true;
    }

  }

  removeProduct(index: number): void {
    let formLength = this.formData.length;
    this.formData.splice(formLength - 1, 1);
    this.maxProductError = false;
  }

  save(data: AddProduct[], addProductForm: NgForm): void {
    this.product = JSON.parse(localStorage.getItem("products"));
    this.formSubmitted = true;
    if (addProductForm.valid) {
      console.log(data);

      if (this.product) {
        data.forEach(element => {
          this.product.push(element);
        });
        localStorage.setItem("products", JSON.stringify(this.product));
        this.formData = [];

      }
      else {
        localStorage.setItem("products", JSON.stringify(data));
        this.formData = [];
      }

    }
  }

  reset(addProductForm: NgForm): void {
    this.formData = [{ category: "", description: "", price: 0, name: "", imgUrl: "", phoneNumber: "", phoneType: "" }];
    addProductForm.resetForm();
  }

}
