import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, from } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { AuthenticationService } from '../_auth/auth.service';
// import { UserService } from '.././_services/user.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private baseUrl = environment.appUrl+'/api/v1/registration';

  constructor(private http: HttpClient,
    //private authenticationService: AuthenticationService
    ) { }

    registration(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user );
  }
}
