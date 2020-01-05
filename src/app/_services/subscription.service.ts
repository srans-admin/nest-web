import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

   private baseUrl = environment.appUrl+'/api/v1/registration';

  constructor(private http: HttpClient) { }

  getSubscription(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createSubscription(subscription: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, subscription);
  }

  getSubscriptionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
