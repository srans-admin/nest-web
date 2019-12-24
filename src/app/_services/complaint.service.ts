import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComplaintService {

   private baseUrl = 'http://localhost:8080/nest-server/api/v1/complaints';

  constructor(private http: HttpClient) { }

  getComplaint(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
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
}
