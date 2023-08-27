import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyPasswordComponent } from './components/verify-password/verify-password.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'validateEmail', component: VerifyEmailComponent },
  { path: 'resetPassword', component: PasswordResetComponent },
  { path: 'verifyPassword', component: VerifyPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
