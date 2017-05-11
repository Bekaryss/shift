import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Project } from "app/models/project";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { ApplicationUser } from "app/models/ApplicationUser";

@Injectable()
export class ProjectsService {
  private apiUrl = 'http://final-tm.azurewebsites.net/odata/';

  constructor(private http: Http) { }

  getProjects(): Observable<Project[]> {
    return this.http.get(this.apiUrl + 'OProjects').map((res: Response) => res.json().value as Project[]).catch(this.handleError);
  }
  createProject(project: Project) {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    project.ManagerId = currentUser.userId;
    project.Manager = null;
    project.ProjectChat = null;
    project.Tasks = [];
    console.log(project);
    return this.http.post(this.apiUrl + 'OProjects', project)
      .map((res: Response) => res.json().value as Project).catch(this.handleError);
  }

  editProject(project: Project) {
    console.log(project);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    return this.http.put(this.apiUrl + 'OProjects(' + project.Id + ')', project, options)
      .map((res: Response) => res.json() as Project).catch(this.handleError);
  }

  deleteProject(project: Project) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}OProjects(${project.Id})`;
    return this.http.delete(url, options).catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('Some error!!!', error);
    return Observable.throw(error.message || error);
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      console.log(currentUser.token);
      let headers = new Headers({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + currentUser.token
      });
      return new RequestOptions({ headers: headers });
    }
  }
}
