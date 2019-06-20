import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchData } from '../core.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData: SearchData;

  constructor(private http: HttpClient) {
    this.searchData = JSON.parse(localStorage.getItem('searchData'));
   }

  search(location?: string, lat?, lng?) {
    localStorage.removeItem('searchData');
    this.searchData = null;
    return this.http.get(`${environment.apiBaseUrl}/search`, {
      params: {
        location,
        lat,
        lng
      }
    }).pipe(
      tap((results: SearchData) => {
      (this.searchData = results);
      localStorage.setItem('searchData', JSON.stringify(results));
      }
      ));
  }
}
