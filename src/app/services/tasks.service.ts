import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { ProjectTask } from "app/models/ProjectTask";
import { TaskStatus } from "app/models/taskStatus";
import { Project } from "app/models/project";

@Injectable()
export class TasksService {
  private apiUrl = 'http://final-tm.azurewebsites.net/odata/';

  constructor(private http: Http) { }

  getTasks(id: string): Observable<ProjectTask[]> {
    var url = this.apiUrl + 'OProjectTasks?$filter=ProjectId eq ' + id + '';
    return this.http.get(url).map((res: Response) => res.json().value as ProjectTask[]).catch(this.handleError);
  }

  getTaskStatus(): Observable<TaskStatus[]> {
    var url = this.apiUrl + 'OTaskStatus';
    return this.http.get(url).map((res: Response) => res.json().value as TaskStatus[]).catch(this.handleError);
  }

  getTaskStatusById(id: number): Observable<TaskStatus> {
    var url = this.apiUrl + 'OTaskStatus?$filter=Id eq ' + id + '';
    return this.http.get(url).map((res: Response) => res.json().value as TaskStatus[]).catch(this.handleError);
  }

  getProjectById(id: string): Observable<Project> {
    var url = this.apiUrl + 'OProjects(' + id + ')';
    return this.http.get(url).map((res: Response) => res.json() as Project).catch(this.handleError);
  }

  createTask(task: ProjectTask) {
    task.ClosedByUser = null;
    task.ClosedByUserId = null;
    task.TaskStatus = undefined;
    return this.http.post(this.apiUrl + 'OProjectTasks', task)
      .map((res: Response) => res.json() as ProjectTask).catch(this.handleError);
  }

  editTask(task: ProjectTask) {
    task.TaskStatus = undefined;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    return this.http.put(this.apiUrl + 'OProjectTasks(' + task.Id + ')', task, options)
      .map((res: Response) => res.json() as ProjectTask).catch(this.handleError);
  }

  deleteTask(task: ProjectTask) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}OProjectTasks(${task.Id})`;
    return this.http.delete(url, options).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }
}
