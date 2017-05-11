import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectTask } from "app/models/ProjectTask";
import { TasksService } from "app/services/tasks.service";
import { TaskStatus } from "app/models/taskStatus";

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.scss']
})
export class TaskEditComponent implements OnInit {
  taskStatus: TaskStatus[];
  selectedValue: number;
  @Input() task: ProjectTask;
  @Output() edit: EventEmitter<ProjectTask> = new EventEmitter();

  constructor(private taskService: TasksService) {
  }

  ngOnInit() {  
    this.taskService.getTaskStatus().subscribe(tasS => {
      this.taskStatus = tasS,
        console.log(this.taskStatus)
    });
  }

  onSubmit() {
    this.edit.emit(this.task);
    this.task = new ProjectTask();
  }

}
