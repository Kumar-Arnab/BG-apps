import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  passwordResetForm: any;

  constructor (
    private router: Router
  ) {}

  ngOnInit(): void {
    this.passwordResetForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(environment.emailRegex)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    });
  }

  get email() {
    return this.passwordResetForm.get('email');
  }

  get password() {
    return this.passwordResetForm.get('password');
  }

  submit() {
    this.router.navigate(['/verifyPassword'])
  }

}
