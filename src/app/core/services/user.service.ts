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
    return this.http.delete(`${environment.apiBaseUrl}/user/concerthall/${idConcerthall}`);
  }

  addConcerthall(data) {

    return this.http
    .post(`${environment.apiBaseUrl}/user/concerthall`, {
      full_name: data.full_name,
      description: data.description,
      website: data.website,
      phone_number: data.phone_number,
      address: data.street + ' ' + data.number + ' ' +  data.zip + ' ' + data.city,
    });

  }

  addConcert(data) {
    return this.http
    .post(`${environment.apiBaseUrl}/user/concert/${data.idLocal}`, {
      band: data.band,
      date: data.date + ' ' + data.hour,
      tickets: data.tickets,
      style: data.style,
      website: data.website,
      description: data.description,
    });

  }

}
