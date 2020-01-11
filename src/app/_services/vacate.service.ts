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
export class VacateService {

  private baseUrl = environment.appUrl+'/api/v1/vacate';

  constructor(private http: HttpClient,
    private userpicStorageService: UserpicstorageService,
    private authenticationService: AuthenticationService,
    private registrationService: RegistrationService) { }

    getVacate(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`,  this.authenticationService.getHttpHeaders());
    }
  
  
    createVacate(user: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, user, this.authenticationService.getHttpHeaders());
    }
      
}
