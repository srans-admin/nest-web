import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserpicstorageService } from '././userpicstorage.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';
import { RegistrationService } from '.././_services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private baseUrl = environment.appUrl+'/api/v1/users'; 

  constructor(private http: HttpClient,
    private userpicStorageService: UserpicstorageService,
    private authenticationService: AuthenticationService,
    private registrationService: RegistrationService) { }

    getUserDetails(id: number): Observable<any>{
      return this.http.get(`${this.baseUrl}/${id}`, this.authenticationService.getHttpHeaders());
    }

    editProfile(currentUser: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${currentUser.userId}`, currentUser, this.authenticationService.getHttpHeaders());
    }

    // getUserDetails(adminId: number, type:string): Observable<any>{
    //   return this.http.get(`${this.baseUrl}?id=${adminId}&type=${type}`, this.authenticationService.getHttpHeaders());
    // }
    
}