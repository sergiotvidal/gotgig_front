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
    const localStorageSearchData = JSON.parse(localStorage.getItem('searchData'));
    this.searchData = localStorageSearchData ? localStorageSearchData : {};
   }

  search(location?: string, lat?, lng?) {
    if (localStorage.searchData) {
      localStorage.removeItem('searchData');
    }

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
