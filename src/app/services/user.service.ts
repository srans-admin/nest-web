import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/userlist-model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }

  formData: User;

  readonly APIUrl = 'http://localhost:8080/nest-server/api/user';

  getDepList(): Observable<User[]> {
    return this.http.get<User[]>(this.APIUrl + '/User');
  }
}
