import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private baseUrl = environment.appUrl+'/api/v1/contacts';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }

  getContact(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.authenticationService.getHttpHeaders());
  }

  createContact(role: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, role,  this.authenticationService.getHttpHeaders());
  }

  updateContact(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value ,  this.authenticationService.getHttpHeaders());
  }

  deleteContact(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' }, );
  }

  getContactsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`,  this.authenticationService.getHttpHeaders());
  }
}
