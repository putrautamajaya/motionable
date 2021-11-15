import { Component, OnInit } from '@angular/core';

import { MProject } from '../../models/project-history.model'

@Component({
  selector: 'project-history',
  templateUrl: './project-history.component.html',
  styleUrls: ['./project-history.component.sass']
})
export class ProjectHistoryComponent implements OnInit {

  projects: MProject[]

  constructor() {
    this.projects = [
      new MProject('Project1', '10 / 1 / 2021', 'Pending brief'),
      new MProject('Project2', '10 / 1 / 2021', 'In progress'),
      new MProject('Project3', '10 / 1 / 2021', 'Completed')
    ]
  }

  ngOnInit(): void {
  }

}
