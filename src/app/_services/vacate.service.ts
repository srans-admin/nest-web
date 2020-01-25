import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
    providedIn: 'root'
  })

  export class VacateService{

    private baseUrl = environment.appUrl +'/api/v1/users/vacate';
    private userUrl = environment.appUrl + '/api/v1/users';

    constructor(private http: HttpClient, 
                private authenticationService: AuthenticationService) { }

    createVacate(vacate: Object): Observable<any>{
        return this.http.post(`${this.baseUrl}`, vacate, this.authenticationService.getHttpHeaders());
    }

    getUserDetails(id:number): Observable<any>{
      return this.http.get(`${this.userUrl}/${id}`, this.authenticationService.getHttpHeaders());
    }
  }