import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HostelService {

  private baseUrl = 'http://localhost:9090/nest-server/api/v1/hostels';

  constructor(private http: HttpClient) { }

  getHostel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHostel(hostel: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, hostel);
  }  

  putHostel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHostel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHostelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
