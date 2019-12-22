import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/management';

  constructor(private http: HttpClient) { }

  getManagement(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createManagement(management: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, management);
  }

  updateManagement(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteManagement(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getManagementsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
