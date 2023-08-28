import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseModel } from 'src/app/models/response.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  tokenExpired: boolean = false;
  verifyEmailForm: any;
  error: string = '';

  constructor (
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    if (!this.tokenExpired) {
      this.verifyEmailForm = new FormGroup({
        token: new FormControl('', [
          Validators.required
        ])
      });
    }

    if (this.tokenExpired) {
      this.verifyEmailForm = new FormGroup({
        newToken: new FormControl('', [
          Validators.required
        ])
      });
    }
  }

  get token() {
    return this.verifyEmailForm.get('token');
  }

  get newToken() {
    return this.verifyEmailForm.get('newToken');
  }

  resendToken() {
    this.tokenExpired = true;
    this.ngOnInit();
  }

  fetchNewToken() {
    this.error = '';
    this.userService.resendVerificationEmail(this.verifyEmailForm.get('newToken')?.value).subscribe(res => {
      this.tokenExpired = false;
      this.ngOnInit();
    },
    (error) => {
      this.error = error?.error?.error;
    });
  }

  submit() {
    if (!this.tokenExpired){
      this.userService.verifyEmail(this.verifyEmailForm.get('token')?.value).subscribe(res => {
        console.log(res.success)
        this.router.navigate(['/login']);
      },
      (error) => {
        this.error = error?.error?.error;
      });
    }
  }
}
