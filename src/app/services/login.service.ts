import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private _httpClient: HttpClient) {}

  login(user: User):Observable<User> {

    return this._httpClient.get<User>(
      `http://localhost:3000/users?email=${user.email}&&password=${user.password}`
    );
  }
  isAuthenticated() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}