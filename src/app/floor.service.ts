import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/floors';

  constructor(private http: HttpClient) { }

  getFloor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  addFloor(floor: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, floor);
  }

  updateFloor(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteFloor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getFloorsList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
}
