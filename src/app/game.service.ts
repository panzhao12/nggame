import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  luckyNum: string = '12';
  genNum: string = '?';
  click: number = 0;

  private usersUrl = 'api/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  //generate random number from 0 to 20
  generateNum(): string {
    this.click++;
    return Math.round(Math.random() * 20) + '';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl); //TODO errow handling
  }

  saveRank(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, this.httpOptions);//TODO errow handling
  }
}