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
export class GuestService {

   private baseUrl = environment.appUrl+'/api/v1/';

  constructor(private http: HttpClient,
    private userpicStorageService: UserpicstorageService,
    private authenticationService: AuthenticationService,
    private registrationService: RegistrationService) { }

    getGuest(id: number): Observable<any> {
      return this.http.get(`${this.baseUrl}/${id}`,  this.authenticationService.getHttpHeaders());
    }
  
    getGuestDetails(name: string): Observable<any> {
      return this.http.get(`${this.baseUrl}/byname/${name}`, this.authenticationService.getHttpHeaders());
    }
  
    createGuest(guest: Object): Observable<Object> {
      return this.http.post(`${this.baseUrl}`, guest, this.authenticationService.getHttpHeaders());
    }
  
    updateGuest(id: number, value: any): Observable<Object> {
      return this.http.put(`${this.baseUrl}/${id}`, value, this.authenticationService.getHttpHeaders());
    }
  
    deleteGuest(id: number): Observable<any> {
      return this.http.delete(`${this.baseUrl}/${id}`, this.authenticationService.getHttpHeaders());
    }
  
    getGuestsList(): Observable<any> {
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
