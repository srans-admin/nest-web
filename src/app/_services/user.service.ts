import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { UserpicstorageService } from '././userpicstorage.service';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';
import { RegistrationService } from '.././_services/registration.service';

@Injectable({
  providedIn: 'root'
})
export class UserService { 

  private baseUrl = environment.appUrl+'/api/v1/users'; 
   

  constructor(private http: HttpClient,
    private userpicStorageService: UserpicstorageService,
    private authenticationService: AuthenticationService,
    private registrationService: RegistrationService) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`,  this.authenticationService.getHttpHeaders());
  }

  getUserDetails(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byname/${name}`, this.authenticationService.getHttpHeaders());
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user, this.authenticationService.getHttpHeaders());
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value, this.authenticationService.getHttpHeaders());
  }

  editProfile(currentUser: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${currentUser.userId}`, currentUser, this.authenticationService.getHttpHeaders());
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, this.authenticationService.getHttpHeaders());
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`, this.authenticationService.getHttpHeaders());
  }

  uploadFile( file: File , cat: String,  id : number ) : Observable<any>  {  
    let url = this.baseUrl + "/"+id+"/upload/"+cat ; 
    return this.userpicStorageService.uploadFile(url, file );
  }

  retriveFile(cat: String,  id : number): Observable<any> {
    let url = this.baseUrl + "/"+id+"/retrive/"+cat ; 
    return this.userpicStorageService.retriveFile(url);
  }
}
