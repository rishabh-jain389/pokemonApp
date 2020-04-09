import { Injectable } from '@angular/core';
import {AuthService} from './auth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private  router: Router) { }

  canActivate() {
    if(this.auth.getAdmin() === true) {
      return true
    }
    else {
      this.router.navigate(['/home']);
      return false
    }
  }
}
