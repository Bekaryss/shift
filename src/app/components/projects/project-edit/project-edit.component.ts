import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Project } from "app/models/project";

@Component({
  selector: 'app-project-edit',
  templateUrl: './project-edit.component.html',
  styleUrls: ['./project-edit.component.scss']
})
export class ProjectEditComponent implements OnInit {
  @Input() project: Project;
  @Output() edit: EventEmitter<Project> = new EventEmitter();

  constructor() { 
  }

  ngOnInit() {
  }

  onSubmit(){
    this.edit.emit(this.project);
    this.project = new Project();
  }

}
