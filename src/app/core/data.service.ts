import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Production } from './model/production';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = "https://api.punkapi.com/v2/beers"

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Production[]>{
     return this.http.get<Production[]>(this.url)
  } 

  fetchBeersTable(sort: Sort): Observable<Production[]>{
    const params = new HttpParams()
    .set('_sort', sort.active)
    .set('_order', sort.direction);
    return this.http.get<Production[]>(this.url, {params})
  } 

  getRandomBeers(): Observable<Production[]>{
    return this.http.get<Production[]>(this.url +'/random')
    }

  getBeerData(): Observable<Production[]>{
      return this.http.get<Production[]>(this.url +'/?page=1&per_page=12')
    }

 //Observables from RxJS library can emit multiple values.
}
