import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "app/models/project";

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
  model: any = {};

  project: Project = new Project();
  @Output() create: EventEmitter<Project> = new EventEmitter();

  constructor() { }

  ngOnInit() {   
  }

  onSubmit(){
    this.project.Title = this.model.Title;
    this.project.Description = this.model.Description;
    console.log(this.model.Description);
    this.create.emit(this.project);
    this.project = new Project();
  }
  
}
