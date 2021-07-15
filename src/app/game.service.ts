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
  clicks: number = 0;

  private usersUrl;

  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users'
   }

  //generate random number from 0 to 20
  generateNum(): string {
    this.clicks++;
    return Math.round(Math.random() * 20) + '';
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl); //TODO error handling
  }

  saveRank(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user);//TODO error handling
  }
}
