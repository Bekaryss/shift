import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TasksService } from "app/services/tasks.service";
import { ProjectTask } from "app/models/ProjectTask";
import * as moment from 'moment';
import { Project } from "app/models/project";
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
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
export class TaskComponent implements OnInit {
  tasks: ProjectTask[];
  selectedTask: ProjectTask;
  projectId: string;
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private taskService: TasksService
  ) { }

  ngOnInit() {
    this.projectId = this.route.snapshot.paramMap.get('id');
    console.log(this.projectId);
    this.taskService.getTasks(this.projectId).subscribe(tas => this.tasks = tas);
    this.taskService.getProjectById(this.projectId).subscribe(proj =>{ this.project = proj });
  }

  select(task: ProjectTask) {
    console.log(task);
    this.selectedTask = task;
  }

  create(task: ProjectTask) {
    task.ProjectId = Number(this.projectId);
    task.Project = null;
    this.taskService.createTask(task).subscribe(res => {
      this.tasks.push(task)
      console.log(task)
    });
  }

  end(task: ProjectTask){
    task.EndDate = moment(Date.now()).format();
    this.taskService.editTask(task).subscribe(res => {console.log(res)});
  }

  edit(task: ProjectTask) {
    this.taskService.editTask(task).subscribe(res => {console.log(res)});
  }

  delete(task: ProjectTask) {
    this.taskService.deleteTask(task).subscribe(res => {
      let index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    });
  }



}
