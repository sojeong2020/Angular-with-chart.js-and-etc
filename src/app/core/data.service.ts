import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Production } from './model/production';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url:string = "https://api.punkapi.com/v2/beers"

  constructor(private http: HttpClient) { }

  getBeers(): Observable<Production[]>{
     return this.http.get<Production[]>(this.url)
  } 
 
  getRandomBeers(): Observable<Production[]>{
    return this.http.get<Production[]>(this.url +'/random')
    }

  getBeerData(): Observable<Production[]>{
      return this.http.get<Production[]>(this.url +'/?page=1&per_page=12')
    }

 //Observables from RxJS library can emit multiple values.
}
