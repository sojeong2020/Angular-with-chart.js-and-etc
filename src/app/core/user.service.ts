import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { USERS } from './userData';

@Injectable()
export class UserService {

  setGroupFilter$ = new Subject<any>();
  getGroupFilter = this.setGroupFilter$.asObservable();

  constructor() {}

  fetchUsers(): Observable<any> {
    return of(USERS);
  }
}