import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PasswordModel } from '../models/password-reset.model';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor(
    private http: HttpClient
  ) { }

  resetPassword(passwordModel: PasswordModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`${environment.devUrl}/api/password/resetPassword`, passwordModel);
  }

  savePassword(passwordModel: PasswordModel, token: string): Observable<ResponseModel> {
    const params = new HttpParams().set('token', token);

    const options = { params };
    return this.http.post<ResponseModel>(`${environment.devUrl}/api/password/savePassword`, passwordModel, options);
  }

}
