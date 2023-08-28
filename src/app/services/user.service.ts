import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterRequest } from '../models/register-request.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticateRequestModel } from '../models/authenticate-request.model';
import { AuthenticateResponseModel } from '../models/authentication-response.model';
import { ResponseModel } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(registerModel: RegisterRequest): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${environment.devUrl}/api/auth/register`, registerModel);
  }

  login(authenticateModel: AuthenticateRequestModel): Observable<any> {
    return this.http.post<any>(`${environment.devUrl}/api/auth/authenticate`, authenticateModel);
  }

  verifyEmail(token: string): Observable<ResponseModel> {
    const params = new HttpParams().set('token', token);

    const options = { params };

    return this.http.get<ResponseModel>(`${environment.devUrl}/api/auth/verifyRegistration`, options);
  }

  resendVerificationEmail(token: string): Observable<ResponseModel> {
    const params = new HttpParams().set('token', token);

    const options = { params };

    return this.http.get<ResponseModel>(`${environment.devUrl}/api/auth/resendToken`, options);
  }

}
