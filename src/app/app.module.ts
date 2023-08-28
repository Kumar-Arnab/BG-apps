import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { VerifyPasswordComponent } from './components/verify-password/verify-password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChaptersComponent } from './components/chapters/chapters.component';
import { ChapterComponent } from './components/chapter/chapter.component';
import { SlokasComponent } from './components/slokas/slokas.component';
import { SlokaComponent } from './components/sloka/sloka.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    PasswordResetComponent,
    VerifyPasswordComponent,
    ChaptersComponent,
    ChapterComponent,
    SlokasComponent,
    SlokaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
    }),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
