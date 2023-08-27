import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  templateUrl: './verify-password.component.html',
  styleUrls: ['./verify-password.component.css']
})
export class VerifyPasswordComponent implements OnInit {

  verifyPasswordForm: any;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
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
    this.router.navigate(['/login']);
  }

}
