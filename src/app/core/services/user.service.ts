import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap } from 'rxjs/operators';
import { UserData } from '../core.models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  userData: UserData;

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get(`${environment.apiBaseUrl}/user/organization`)
    .pipe(tap((results: UserData) => (this.userData = results)));
  }
  updateUserOrganization(profile) {
    return this.http.put(`${environment.apiBaseUrl}/user/organization`, profile).pipe(
      tap(() => {
        this.userData = {
          ...this.userData,
          ...profile
        };
      })
    );
  }
  deleteUserOrganization() {
    return this.http.delete(`${environment.apiBaseUrl}/user/organization`);
  }

  deleteConcert(idConcert,idConcerthall){
    return this.http.delete(`${environment.apiBaseUrl}/user/concert/${idConcerthall}/${idConcert}`);
  }

  deleteConcerthall(idConcerthall) {
    return this.http.delete(`${environment.apiBaseUrl}/user/concerthall/${idConcerthall}`)
  }
}
