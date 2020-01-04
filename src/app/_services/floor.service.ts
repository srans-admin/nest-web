import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  private baseUrl = environment.appUrl+'/api/v1/hostels/id/floor';

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
