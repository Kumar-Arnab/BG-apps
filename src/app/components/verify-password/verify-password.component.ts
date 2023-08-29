import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordModel } from 'src/app/models/password-reset.model';
import { PasswordService } from 'src/app/services/password.service';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.css']
})
export class VerifyPasswordComponent implements OnInit {

  verifyPasswordForm: any;
  error: string = '';
  passwordModel = new PasswordModel();
  email: any = '';
  newPassword: any = '';

  constructor(
    private router: Router,
    private passwordService: PasswordService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.email = params.get('email');
      this.newPassword = params.get('newPassword');
    });

    this.verifyPasswordForm = new FormGroup({
      token: new FormControl('', [
        Validators.required
      ])
    });
  }

  get token() {
    return this.verifyPasswordForm.get('token');
  }

  submit() {
    this.passwordModel.email = this.email;
    this.passwordModel.newPassword = this.newPassword;

    this.passwordService.savePassword(this.passwordModel, this.verifyPasswordForm.get('token').value).subscribe(res => {
      this.router.navigate(['/login']);
    }, 
    (error) => {
      this.error = error?.error?.error;
    });
    
  }

}
