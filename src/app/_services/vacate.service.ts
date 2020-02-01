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
    private vacateNotificationUrl = environment.appUrl + '/api/v1/users/notifications';
    private userUrl = environment.appUrl + '/api/v1/users';
    //private tenantUrl = environment.appUrl + '/api/v1/users/{id}';

    constructor(private http: HttpClient, 
                private authenticationService: AuthenticationService) { }

    // method related to create vacate request
    createVacate(vacate: Object): Observable<any>{
        return this.http.post(`${this.baseUrl}`, vacate, this.authenticationService.getHttpHeaders());
    }    

    // method related to get vacate requests to admin
    // getVacateRequest(adminId:number): Observable<any>{
    //   return this.http.get(`${this.baseUrl}?adminId=${adminId}`, this.authenticationService.getHttpHeaders());
    // }

    getVacateRequests(adminId: number): Observable<any>{
      return this.http.get(`${this.vacateNotificationUrl}?adminId=${adminId}`, this.authenticationService.getHttpHeaders());
    }

    // method related to update vacate request by admin
    putVacateRequest(adminId:number): Observable<any>{
      return this.http.get(`${this.baseUrl}/${adminId}`, this.authenticationService.getHttpHeaders());
    }


    // method related to user details like id, roomId etc
    //getUserDetails(id:number): Observable<any>{
    //  return this.http.get(`${this.userUrl}/${id}`, this.authenticationService.getHttpHeaders());
    //}

     
  }