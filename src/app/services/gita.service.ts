import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './user.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitaService {

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  chapterList(): Observable<any> {
    const jwtToken = this.userService.getJwtToken();

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };

    return this.http.get<any>(`${environment.devUrl}/bg/api/chapters`, { headers });
  }

  chapter(chId: string): Observable<any> {
    const jwtToken = this.userService.getJwtToken();

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };

    const params = new HttpParams().set('ch_id', chId);

    return this.http.get<any>(`${environment.devUrl}/bg/api/chapter`, { headers, params });
  }

  slokaList(chId: string): Observable<any> {
    const jwtToken = this.userService.getJwtToken();

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };

    const params = new HttpParams().set('ch_id', chId);

    return this.http.get<any>(`${environment.devUrl}/bg/api/sloka`, { headers, params });
  }

  sloka(slok_id: string): Observable<any> {
    const jwtToken = this.userService.getJwtToken();

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };

    const params = new HttpParams().set('slok_id', slok_id);

    return this.http.get<any>(`${environment.devUrl}/bg/api/slok`, { headers, params });
  }

  logout(): Observable<void> {
    const jwtToken = this.userService.getJwtToken();

    const headers = {
      Authorization: `Bearer ${jwtToken}`,
    };

    return this.http.post<void>(`${environment.devUrl}/api/auth/logout`, { headers });
  }

}
