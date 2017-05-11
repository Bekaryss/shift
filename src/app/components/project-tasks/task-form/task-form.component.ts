import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProjectTask } from "app/models/ProjectTask";
import { TaskStatus } from "app/models/taskStatus";
import { TasksService } from "app/services/tasks.service";
import * as moment from 'moment';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  model: any = {};
  taskStatus: TaskStatus[];
  selectedValue: number = 1;
  task: ProjectTask = new ProjectTask();
  selectedStatus: TaskStatus;
  @Output() create: EventEmitter<ProjectTask> = new EventEmitter();

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    this.taskService.getTaskStatus().subscribe(tasS => {
      this.taskStatus = tasS,
        console.log(this.taskStatus)
    });
  }

  onSubmit() {
    this.task.Title = this.model.Title;
    this.task.Description = this.model.Description;
    this.task.TaskStatusId = this.selectedValue;
    this.task.StartDate = moment(Date.now()).format();
    this.task.TaskStatus = this.taskStatus.filter(tas => tas.Id = this.task.TaskStatusId)[0];
    this.task.EndDate = undefined;
    this.create.emit(this.task);
    this.task = new ProjectTask();
  }

}
