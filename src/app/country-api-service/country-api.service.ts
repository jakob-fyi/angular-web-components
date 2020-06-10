import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  // Base url
  baseurl = 'https://restcountries.eu/rest/v2';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCountriesByName(name: string){
    return this.http.get<any>(this.baseurl + '/name/' + name)
    .pipe(
      retry(1)
    );
  }

}
