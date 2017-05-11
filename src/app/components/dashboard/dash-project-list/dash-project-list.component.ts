import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "app/services/projects.service";
import { Project } from "app/models/project";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-dash-project-list',
  templateUrl: './dash-project-list.component.html',
  styleUrls: ['./dash-project-list.component.scss']
  ,
  animations: [
    trigger('openClose', [
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({ transform: 'translateX(0%)' }),
        animate('0.5s ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ],
  host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  },
})
export class DashProjectListComponent implements OnInit {
  projects: Project[];
  
  constructor(private projService: ProjectsService) { }

  ngOnInit() {
    this.projService.getProjects().subscribe(proj => this.projects = proj);
  }

}
