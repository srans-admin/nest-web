import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ServerConfig } from './config/server.config';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  serverConfig: ServerConfig = new ServerConfig();
  private baseUrl = this.serverConfig.getServerURL() +'/api/v1/hostels';
  // private baseUrl = 'http://localhost:8080/nest-server/api/v1/roms';
  private extendedViewUrl = this.serverConfig.getServerURL() + '/api/v1/hostels/{id}/extendingviews';

  constructor(private http: HttpClient) { }

  getRoom(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  postRoom(room: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, room);
  }

  putRoom(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  // putRoom(roomName:any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}`, roomName);
  // }

  deleteRoom(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRoomsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }  
}
