import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService, AuthenticationService } from 'app/services/services';
import { UserRegister } from "app/models/user";
import { MdDialogRef } from "@angular/material";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  error = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private dialogRef: MdDialogRef<RegisterComponent>
  ) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogRef.close();
  }

  register() {
    this.loading = true;
    const user: UserRegister = {
      email: this.model.email,
      password: this.model.password,
      confirmPassword: this.model.confirmPassword,
    }
    this.authenticationService.register(user).subscribe(
      data => {
        this.login();
        this.closeDialog();
        this.error = false;

      },
      error => {
        this.loading = false;
        this.error = true;
      }
    );
  }

  private login() {
    this.loading = true;
    this.authenticationService.login(this.model.email, this.model.password)
      .subscribe(
      data => {
        this.closeDialog();
        this.error = false;
        //this.router.navigate([this.returnUrl]);
      },
      error => {
        this.alertService.error(error);
        this.loading = false;
        error = true;
      });
  }

}
