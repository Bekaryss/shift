import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DatepickerModule } from 'angular2-material-datepicker'
import { MomentModule } from 'angular2-moment';
import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

import { AuthGuard } from "app/guards/auth.guard";
import {
  AlertService,
  AuthenticationService,
} from 'app/services/services';
import { AppComponent } from './app.component';
import { AlertComponent } from './directives/alert/alert.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { AuthComponent } from './components/account/auth/auth.component';
import { MainComponent } from './components/main/main.component';
import { ProjectComponent } from './components/projects/project/project.component';
import { ProjectsService } from "app/services/projects.service";
import { ProjectFormComponent } from './components/projects/project-form/project-form.component';
import { ProjectListComponent } from './components/projects/project-list/project-list.component';
import { ProjectItemComponent } from './components/projects/project-item/project-item.component';
import { ProjectEditComponent } from './components/projects/project-edit/project-edit.component';
import { TaskComponent } from './components/project-tasks/task/task.component';
import { TaskFormComponent } from './components/project-tasks/task-form/task-form.component';
import { TaskListComponent } from './components/project-tasks/task-list/task-list.component';
import { TaskItemComponent } from './components/project-tasks/task-item/task-item.component';
import { TaskEditComponent } from './components/project-tasks/task-edit/task-edit.component';
import { TasksService } from "app/services/tasks.service";
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';
import { DashProjectListComponent } from './components/dashboard/dash-project-list/dash-project-list.component';
import { DashTaskListComponent } from './components/dashboard/dash-task-list/dash-task-list.component';
import { ErrorComponent } from './components/error/error.component';

//canActivate: [AuthGuard]
const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent, children: [
      {
        path: '',
        component: MainComponent, children: [
          {
            path: '',
            component: DashboardComponent,
            children: [
              {
                path: '',
                component: DashProjectListComponent
              },
              {
                path: 'dashboard/:id',
                component: DashTaskListComponent
              }
            ]
          },
          {
            path: 'projects',
            component: ProjectComponent,
            canActivate: [AuthGuard],
            children: [
              {
                path: 'projects/add',
                component: ProjectFormComponent
              }
            ]
          },
          {
            path: 'projects/:id',
            component: TaskComponent
          },
          {
            path: 'error',
            component: ErrorComponent
          }
        ]
      }
    ]
  },

  // otherwise redirect to home
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule,
    MaterialModule.forRoot(),
    DatepickerModule,
    MomentModule,
    FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
  ],
  declarations: [
    AppComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    MainComponent,
    ProjectComponent,
    ProjectFormComponent,
    ProjectListComponent,
    ProjectItemComponent,
    ProjectEditComponent,
    TaskComponent,
    TaskFormComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskEditComponent,
    DashboardComponent,
    DashProjectListComponent,
    DashTaskListComponent,
    ErrorComponent,
  ],
  entryComponents: [LoginComponent, RegisterComponent],
  providers: [
    AuthGuard,
    AlertService,
    AuthenticationService,
    ProjectsService,
    TasksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
