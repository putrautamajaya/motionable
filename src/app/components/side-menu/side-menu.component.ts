import { Component, OnInit } from '@angular/core';

import { MIcon } from 'src/app/models/mobile-bottom-navigation.model';

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})
export class SideMenuComponent implements OnInit {

  icons: MIcon[]
  
  constructor() {
    this.icons = [
      new MIcon(true, '../../../assets/svgs/icon-home-red.svg', '../../../assets/svgs/icon-home.svg'),
      new MIcon(false, '../../../assets/svgs/icon-video-red.svg', '../../../assets/svgs/icon-video.svg'),
      new MIcon(false, '../../../assets/svgs/icon-help.svg', '../../../assets/svgs/icon-help.svg'),
      new MIcon(false, '../../../assets/svgs/icon-settings.svg', '../../../assets/svgs/icon-settings.svg')
    ]
  }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    this.icons.forEach(icon => icon.is_active = false)
    this.icons[index].is_active = true
  }

}
