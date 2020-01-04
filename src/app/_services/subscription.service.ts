import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriptionService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/user';
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
