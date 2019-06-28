import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { SearchData } from '../core.models';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  searchData: SearchData;

  private mapCenterLat = new BehaviorSubject(43.3623436);
  centerLat = this.mapCenterLat.asObservable();

  private mapCenterLng = new BehaviorSubject(-8.4115401);
  centerLng = this.mapCenterLng.asObservable();

  constructor(private http: HttpClient) {
    const localStorageSearchData = JSON.parse(localStorage.getItem('searchData'));
    this.searchData = localStorageSearchData ? localStorageSearchData : {};
   }


   changeLat(centerLat: any) {
    this.mapCenterLat.next(centerLat);
  }

   changeLng(centerLng: any) {
    this.mapCenterLng.next(centerLng);
  }

  changeCoordinates(lat, lng) {
    this.changeLat(lat);
    this.changeLng(lng);
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
