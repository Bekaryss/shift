import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from "app/models/project";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
  animations: [
    trigger('openClose', [
        state('inactive', style({
            transform: 'scale(1)',
            backgroundColor: '#eee'
        })),
        state('active', style({
            transform: 'scale(1.1)',
            backgroundColor: '#cfd8dc'
        })),
        transition('inactive => active', animate('100ms ease-in')),
        transition('active => inactive', animate('100ms ease-out'))
    ]),
    ],
     host: {
    '[@openClose]': 'true',
    'style': 'display: block;'
  },
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  @Output() delete = new EventEmitter();
  @Output() select = new EventEmitter();
  userId: string;
  constructor() { }

  ngOnInit() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.userId = currentUser.userId;
  }

  onSelect(){
    this.select.emit(this.project);
  }

  onDelete(){
    this.delete.emit(this.project);
  }

}
