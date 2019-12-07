import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerConfig } from '../config/server.config';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  serverConfig: ServerConfig = new ServerConfig();
  private baseUrl = this.serverConfig.getServerURL() +'/api/v1/hostels';

  constructor(private http: HttpClient) { } 
  
  uploadFile(url: string, file: File ) : Observable<any>{   
    console.log('File to upload here: '+file);
    const formdata: FormData = new FormData();  
    formdata.append('file', file);  
    return this.http.post(url , formdata);  
  }
}
