import { Component, OnInit } from '@angular/core';

import { MIcon } from '../../models/mobile-bottom-navigation.model';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'mobile-bottom-navigation',
  templateUrl: './mobile-bottom-navigation.component.html',
  styleUrls: ['./mobile-bottom-navigation.component.sass']
})
export class MobileBottomNavigationComponent implements OnInit {

  icons: MIcon[]
  isAdmin: boolean

  constructor(private authService: AuthService) {
    this.icons = [
      new MIcon(true, './assets/svgs/icon-home-red.svg', './assets/svgs/icon-home.svg'),
      new MIcon(false, './assets/svgs/icon-video-red.svg', './assets/svgs/icon-video.svg'),
      new MIcon(false, './assets/svgs/icon-add-red.svg', './assets/svgs/icon-add-red.svg'),
      new MIcon(false, './assets/svgs/icon-help.svg', './assets/svgs/icon-help.svg'),
      new MIcon(false, './assets/svgs/icon-settings.svg', './assets/svgs/icon-settings.svg')
    ]

    this.isAdmin = this.authService.isAdmin
  }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    this.icons.forEach(icon => icon.is_active = false)
    this.icons[index].is_active = true
  }

}
