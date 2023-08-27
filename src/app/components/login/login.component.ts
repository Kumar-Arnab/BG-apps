import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: any;

  constructor (
    private router: Router,
    private fb: FormBuilder
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
    this.router.navigate(['/register'])
  }

  verifyEmail() {
    this.router.navigate(['/validateEmail'])
  }

  resetPassword() {
    this.router.navigate(['/resetPassword'])
  }

  login() {
    console.log('clicked login', this.loginForm.get('email').value, '   ', this.loginForm.get('password').value)
  }
}
