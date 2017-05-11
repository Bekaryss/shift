import { Component, OnInit } from '@angular/core';
import { Project } from "app/models/project";
import { ProjectsService } from "app/services/projects.service";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    trigger('openClose', [
      transition(':enter', [  // before 2.1: transition('void => *', [
        style({opacity: 0}),
        animate('1.5s ease-in-out', style({ opacity: 1 }))
      ]),
      transition(':leave', [  // before 2.1: transition('* => void', [
        style({opacity: 1}),
        animate('1.5s ease-in-out', style({ opacity: 0 }))
      ])
    ])
  ],
  host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  },
})
export class ProjectComponent implements OnInit {
  projects: Project[];
  selectedProject: Project;

  constructor(private projService: ProjectsService) { }

  ngOnInit() {
    this.projService.getProjects().subscribe(proj => {
    this.projects = proj
      console.log(this.projects);
    });
  }

  select(project: Project) {
    console.log(project);
    this.selectedProject = project;
  }

  create(project: Project) {
    console.log(project);
    this.projService.createProject(project).subscribe(res => this.projects.push(project));
  }

  edit(project: Project) {
    
    this.projService.editProject(project).subscribe(res => {console.log(res)});
  }

  delete(project: Project) {
    this.projService.deleteProject(project).subscribe(res => {
      let index = this.projects.indexOf(project);

      if (index > -1) {
        this.projects.splice(index, 1);
      }
    });
  }

}
