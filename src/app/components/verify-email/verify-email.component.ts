import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  tokenExpired: boolean = false;
  verifyEmailForm: any;

  constructor (
    private router: Router
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
    this.tokenExpired = false;
    this.ngOnInit();
  }

  submit() {
    this.router.navigate(['/login']);
  }
}
