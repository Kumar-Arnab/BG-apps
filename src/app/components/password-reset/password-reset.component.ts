import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordModel } from 'src/app/models/password-reset.model';
import { PasswordService } from 'src/app/services/password.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent implements OnInit {

  passwordResetForm: any;
  error: string = '';
  passwordModel = new PasswordModel();

  constructor (
    private router: Router,
    private passwordService: PasswordService
  ) {}

  ngOnInit(): void {
    this.passwordResetForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(environment.emailRegex)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
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
    this.passwordModel.email = this.passwordResetForm.get('email').value;
    this.passwordModel.newPassword = this.passwordResetForm.get('password').value;

    this.passwordService.resetPassword(this.passwordModel).subscribe(res => {
      this.router.navigate(['/verifyPassword'], { queryParams: { email: this.passwordModel.email, newPassword: this.passwordModel.newPassword } });
    },
    error => {
      this.error = error?.error?.error;
    });
    
  }

}
