import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectTask } from "app/models/ProjectTask";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  @Input() tasks: ProjectTask[];
  @Output() delete: EventEmitter<ProjectTask> = new EventEmitter();
  @Output() select: EventEmitter<ProjectTask> = new EventEmitter();
  @Output() end: EventEmitter<ProjectTask> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSelect(task: ProjectTask) {
    this.select.emit(task);
  }

  onDelete(task: ProjectTask) {
    this.delete.emit(task);
  }

  onEnd(task: ProjectTask){
    this.end.emit(task);
  }

}
