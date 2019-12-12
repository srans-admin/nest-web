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
  
  private extendedViewUrl = this.serverConfig.getServerURL() + '/api/v1/hostels/{id}/extendingviews';

  constructor(private http: HttpClient) { }

  postBed(bed: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, bed);
  }

}