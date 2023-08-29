import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { RegisterRequest } from 'src/app/models/register-request.model';
import { ResponseModel } from 'src/app/models/response.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: any;
  error: string = '';
  registerModel = new RegisterRequest();
  

  constructor(
    private router: Router,
    private userService: UserService,
    
  ) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required
      ]),
      lastName: new FormControl('', [
        Validators.required
      ]),
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

  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastName() {
    return this.registerForm.get('lastName');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  register() {
    
    this.registerModel.firstName = this.registerForm.get('firstName').value;
    this.registerModel.lastName = this.registerForm.get('lastName').value;
    this.registerModel.email = this.registerForm.get('email').value;
    this.registerModel.password = this.registerForm.get('password').value;

    this.userService.registerUser(this.registerModel).subscribe(res => {
      this.router.navigate(['/validateEmail']);
    },
    (error) => {
      this.error = error?.error?.error;
    });

    
  }

}
