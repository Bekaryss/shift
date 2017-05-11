import { Component, OnInit, Output, ViewChildren, QueryList, EventEmitter } from '@angular/core';
import { RegisterComponent } from "app/components/account/register/register.component";
import { LoginComponent } from "app/components/account/login/login.component";
import { MdDialog } from "@angular/material";
import { AuthenticationService } from "app/services/services";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  username: string;

  constructor(public dialog: MdDialog, public authService: AuthenticationService) {
    this.checkUser();
  }

  checkUser() {
    if (this.authService.isLoggedIn()) {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.username = currentUser.userName;
    }
  }

  ngOnInit() {
  }

  loggedIn() {
    this.checkUser();
    return this.authService.isLoggedIn();
  }

  openLoginDialog() {
    this.dialog.open(LoginComponent);
    this.checkUser();
  }

  openSignupDialog() {
    this.dialog.open(RegisterComponent);
    this.checkUser();
  }

  logout() {
    this.authService.logout();
    this.username = null;
  }

}
