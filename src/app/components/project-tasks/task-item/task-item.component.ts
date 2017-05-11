import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProjectTask } from "app/models/ProjectTask";
import { TasksService } from "app/services/tasks.service";

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ProjectTask;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() endTask = new EventEmitter();

  constructor(private taskService: TasksService) { }

  ngOnInit() {
    
    // this.taskService.getTaskStatusById(this.task.TaskStatusId).subscribe(tasS => {
    //   this.task.TaskStatus = tasS[0],
    //     console.log(this.task)
    // });
  }

  onSelect(){
    this.select.emit(this.task);
  }

  onDelete(){
    this.delete.emit(this.task);
  }
  onEnd(){
    this.endTask.emit(this.task);
  }

}
