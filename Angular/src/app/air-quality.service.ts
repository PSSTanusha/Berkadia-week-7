import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private url = 'https://api.openaq.org/v1/countries';
  constructor(private httpClient: HttpClient) {

  }
  getCountries() {
      return this.httpClient.get(this.url).pipe(map((response) => {
          return response;
      })).pipe(catchError((err: any) => {
          return throwError(err);
      }
      ));
  }
  fetchCountryData(apiURL: string) {

      return this.httpClient.get(apiURL).pipe(map((response) => {
          return response;
      })).pipe(catchError((err: any) => {
          return throwError(err);
      }
      ));
  }
}
