import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

    private baseUrl = environment.appUrl+'/api/v1/complaints';
//    private complaintHistory = environment.appUrl+'/api/v1/complaints/complainthistory';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }

  getComplaint(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

 getAllComplaintsForUser(uid: number,role: string): Observable<any> {
    return this.http.get(`${this.baseUrl}?uid=${uid}&role=${role}`, this.authenticationService.getHttpHeaders());
  }

  createComplaint(complaint: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, complaint);
  }

  updateComplaint(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteComplaint(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getComplaintList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

 //getComplaintHistory(id: number): Observable<any>{
   // return this.http.get(`${this.complaintHistory}/${id}`, this.authenticationService.getHttpHeaders());
  //}
}
