import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticateRequestModel } from 'src/app/models/authenticate-request.model';
import { AuthenticateResponseModel } from 'src/app/models/authentication-response.model';
import { ResponseModel } from 'src/app/models/response.model';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;
  authenticateModel= new AuthenticateRequestModel();
  error: string = '';

  constructor (
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(environment.emailRegex)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  registerUser() {
    this.router.navigate(['/register']);
  }

  verifyEmail() {
    this.router.navigate(['/validateEmail']);
  }

  resetPassword() {
    this.router.navigate(['/resetPassword']);
  }

  login() {

    this.authenticateModel.email = this.loginForm.get('email').value;
    this.authenticateModel.password = this.loginForm.get('password').value;

    this.userService.login(this.authenticateModel).subscribe((res: AuthenticateResponseModel) => {
      localStorage.setItem('access_token', res.access_token);
      this.router.navigate(['/chapters']);
    },
    (error) => {
      this.error = error?.error?.error;
    });
  }
}
