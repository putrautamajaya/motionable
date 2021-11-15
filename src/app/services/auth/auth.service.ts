import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logIn: boolean
  isAdmin: boolean

  constructor() { 
    this.logIn = false
    this.isAdmin = true
  }

  onLogIn() {
    this.logIn = true
  }

  isAuthenticated() {
    return this.logIn
  }
}