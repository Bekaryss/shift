import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs'
import { UserRegister } from "app/models/user";


@Injectable()
export class AuthenticationService {
  private apiUrl: string = 'http://final-tm.azurewebsites.net/';

  public redirectUrl: string;

  private user: any = {};
  private headers: Headers;
  private options: RequestOptions;

  constructor(private http: Http) {
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  register(userRegister: UserRegister): Observable<boolean> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let url = this.apiUrl + 'api/Account/Register';

    let body = JSON.stringify(userRegister);

    return this.http.post(url, body, options).map(
      (res: Response) => {
        if (res.status == 200) {
          console.log('success register');
          return true;
        }
        else {
          return false;
        }
      }
    );
  }

  login(username: string, password: string): Observable<boolean> {
    console.log(JSON.stringify({ userName: username, password: password, grand_type: 'password' }));
     let body = 'userName=' + username + '&password=' + password + '&grant_type=password';
    return this.http.post(this.apiUrl + 'Token', body, this.options)
      .map((response: Response) => {
        if (response.status == 200) {
          // login successful if there's a jwt token in the response
          let user = response.json();
          console.log(user);
          localStorage.removeItem('currentUser');
          localStorage.setItem('currentUser', JSON.stringify(user));
          return true;
        }
        else {
          return false;
        }
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
    location.reload();
  }

  isLoggedIn(): boolean {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      return true
    } else {
      return false
    }
  }



}
