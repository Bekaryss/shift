import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  color: string;

  availableColors = [
    { name: 'Dashboard', icon: 'dashboard', color: 'primary', link: '/' },
    { name: 'Projects', icon: 'view_carousel', color: 'accent', link: '/projects' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
