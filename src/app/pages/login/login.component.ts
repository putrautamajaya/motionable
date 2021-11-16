import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm: NgForm

  selectedTab: string
  isCreateAccount: boolean

  constructor(private authService: AuthService, private route: Router) {
    this.selectedTab = 'login'
    this.isCreateAccount = false
  }

  ngOnInit(): void {
  }

  onTabSelect(tab: string) {
    this.selectedTab = tab
  }

  onSubmit() {
    console.log(this.loginForm.value);
    
    this.authService.onLogIn()
    this.route.navigate(['/project-history'])
  }

  onCreateAccount() {
    this.isCreateAccount = true
  }

  closeCreateAccount() {
    this.isCreateAccount = false
  }
}
