import { Injectable } from '@angular/core';
import { CommonService } from '../common/common.service';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  logIn: boolean
  isAdmin: boolean

  constructor(private commonService: CommonService) { 
    let local = this.commonService.getLocalStorage();

    this.logIn = local.logIn || false
    this.isAdmin = local.isAdmin || true
  }

  onLogIn() {
    this.logIn = true
    this.commonService.setLocalStorage({ logIn: this.logIn, isAdmin: this.isAdmin })
  }

  isAuthenticated() {
    return this.logIn
  }
}
