import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly API = 'users';
  readonly BASE_URL = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getUserByEmail(email: string) {
    const url = `${this.BASE_URL}/${this.API}/?email=${email}`;

    return this.http.get(url);
  }

}
