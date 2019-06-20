import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { AuthInfo } from '../core.models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authInfo: AuthInfo;

  constructor(private http: HttpClient, private router: Router) {
    this.authInfo = JSON.parse(localStorage.getItem('auth'));
  }

  login({ email, password }) {
    return this.http
      .post(`${environment.apiBaseUrl}/account/login`, {
        email,
        password
      })
      .pipe(
        tap((info: AuthInfo) => {
          this.authInfo = info;
          localStorage.setItem('auth', JSON.stringify(info));
        })
      );
  }

  register({ full_name, email, password }) {
    return this.http.post(`${environment.apiBaseUrl}/account/register`, {
      full_name,
      email,
      password
    });
  }

  logout() {
    localStorage.removeItem('auth');
    this.authInfo = null;
    this.router.navigate(['/']);
  }
}
