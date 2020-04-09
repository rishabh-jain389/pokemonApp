import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class HasProductService implements CanActivate {

  constructor( private  router: Router) { }

  canActivate() {
    let hasProduct = localStorage.getItem('products');
    if(hasProduct) {
      return true
    }
    else {
      this.router.navigate(['/create-product']);
      return false
    }
  }
}
