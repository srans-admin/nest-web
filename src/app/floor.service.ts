import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private baseUrl = 'http://dev.nidos.in:8080/nest-server/api/v1/hostels/id/floor';

  constructor(private http: HttpClient) { }

  getFloor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createFloor(floor: Object, id: number): Observable<Object>{
    return this.http.post(`${this.baseUrl}/${id}`, floor);
  }

  putFloor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFloor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFloorsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
