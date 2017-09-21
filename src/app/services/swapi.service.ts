import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const API_URL = environment.apiUrl;

export interface swapiModel {
  next: string
  previous: string
  results: Object[]
}

@Injectable()
export class SwapiService {

  constructor(private http: Http) { }

  getPeople(): Observable<swapiModel>{
    return this.http
      .get(`${API_URL}people/`)
      .map(data => {
        return data.json()
      })
  }

  getFilms(): Observable<swapiModel>{
    return this.http
      .get(`${API_URL}films/`)
      .map(data => {
        return data.json()
      })
  }

  getPaged(url): Observable<swapiModel>{
    return this.http
      .get(url)
      .map(data => {
        return data.json()
      })
  }

}
