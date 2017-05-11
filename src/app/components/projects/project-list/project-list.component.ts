import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "app/models/project";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  @Input() projects: Project[];
  @Output() delete: EventEmitter<Project> = new EventEmitter();
  @Output() select: EventEmitter<Project> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project) {
    this.select.emit(project);
  }

  onDelete(project: Project) {
    this.delete.emit(project);
  }

}
