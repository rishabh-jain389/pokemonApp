import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isAdmin:boolean;
  constructor() { }

  getAdmin(): boolean {
    this.isAdmin = true;
    return this.isAdmin;
  }
}
