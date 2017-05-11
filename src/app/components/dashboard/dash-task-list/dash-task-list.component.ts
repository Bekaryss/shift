import { Component, OnInit } from '@angular/core';
import { TasksService } from "app/services/tasks.service";
import { ProjectTask } from "app/models/ProjectTask";
import { ActivatedRoute } from "@angular/router";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-dash-task-list',
  templateUrl: './dash-task-list.component.html',
  styleUrls: ['./dash-task-list.component.scss'],
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
export class DashTaskListComponent implements OnInit {
  tasks: ProjectTask[];

  constructor(
    private taskService: TasksService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get('id');
    this.taskService.getTasks(id).subscribe(tas => this.tasks = tas);
  }

}
