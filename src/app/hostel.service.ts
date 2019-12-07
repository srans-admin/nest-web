import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ServerConfig } from './config/server.config';
import { FileStorageService } from './services/filestorage.service';
 

@Injectable({
  providedIn: 'root'
})
export class HostelService { 
  
  serverConfig: ServerConfig = new ServerConfig();
  private baseUrl = this.serverConfig.getServerURL() +'/api/v1/hostels';

  constructor(private http: HttpClient, private fileStorageService: FileStorageService) { }

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
  
  uploadFile( file: File , cat: String,  id : number ) : Observable<any>  
  {  
    let url = this.baseUrl + "/"+id+"/upload/"+cat ; 
    return this.fileStorageService.uploadFile(url, file );
  }


  retriveFile(cat: String,  id : number): Observable<any> {
    let url = this.baseUrl + "/"+id+"/retrive/"+cat ; 
    return this.fileStorageService.retriveFile(url);
  }


}
