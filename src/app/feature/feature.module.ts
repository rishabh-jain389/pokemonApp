import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule } from '@angular/router';
import { CreateProductComponent } from './create-product/create-product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [HomeComponent, DetailComponent, CreateProductComponent, ProductListComponent],
  exports: [HomeComponent, DetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule

  ]
})
export class FeatureModule { }
