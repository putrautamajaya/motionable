import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service'

@Component({
  selector: 'top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.sass']
})
export class TopNavigationComponent implements OnInit {

  isAdmin: boolean

  constructor(private authService: AuthService) {
    this.isAdmin = this.authService.isAdmin
  }

  ngOnInit(): void {
  }

}
