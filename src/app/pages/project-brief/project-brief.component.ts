import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'project-brief',
  templateUrl: './project-brief.component.html',
  styleUrls: ['./project-brief.component.sass']
})
export class ProjectBriefComponent implements OnInit {

  step: number

  progressBar: {active: number[], inactive: number[]}

  constructor() {
    this.step = 1
    this.setProgressBar()
  }

  ngOnInit(): void {
  }

  setProgressBar() {
    this.progressBar = {
      active: [],
      inactive: []
    }

    for (let i=0; i<this.step; i++) {
      this.progressBar.active.push(i)
    }

    for (let i=this.step; i<5; i++) {
      this.progressBar.inactive.push(i)
    }
  }

}
