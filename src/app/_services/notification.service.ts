import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
    providedIn: 'root'
  })

  export class NotificationService{
      private baseUrl = environment.appUrl + '/api/v1/subscriptionandnotification/username';

      constructor(private http: HttpClient, 
        private authenticationService: AuthenticationService) { }

        getNotification(value: any): Observable<any> {
            return this.http.get(`${this.baseUrl}`, this.authenticationService.getHttpHeaders());
          }

  }