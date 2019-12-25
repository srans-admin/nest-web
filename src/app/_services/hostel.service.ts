import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { FileStorageUtil } from '../utils/filestorage.util';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';
 

@Injectable({
  providedIn: 'root'
})
export class HostelService { 

  private baseUrl = environment.appUrl +'/api/v1/hostels';
  private extendedViewUrl = environment.appUrl + '/api/v1/hostels/{id}/extendingviews';

  constructor(private http: HttpClient, private fileStorageUtil: FileStorageUtil, 
    private authenticationService: AuthenticationService) { }

  getHostel(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`, this.authenticationService.getHttpHeaders());
  }

  createHostel(hostel: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, hostel, this.authenticationService.getHttpHeaders());
  }  

  putHostel(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, this.authenticationService.getHttpHeaders());
  }

  deleteHostel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`,  this.authenticationService.getHttpHeaders());
  }

  getHostelsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.authenticationService.getHttpHeaders());
  } 
  
  uploadFile( file: File , cat: String,  id : number ) : Observable<any>  
  {  
    let url = this.baseUrl + "/"+id+"/upload/"+cat ; 
    return this.fileStorageUtil.uploadFile(url, file );
  }


  retriveFile(cat: String,  id : number): Observable<any> {
    let url = this.baseUrl + "/"+id+"/retrive/"+cat ; 
    return this.fileStorageUtil.retriveFile(url);
  }


}
