import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserpicstorageService {

  private baseUrl = environment.appUrl+'/api/v1/tenants';

  constructor(private http: HttpClient,
    private authenticationService: AuthenticationService) { }

  uploadFile(url: string, file: File ) : Observable<any>{   
    console.log('File to upload here: '+file);
    const formdata: FormData = new FormData();
    formdata.append('file', file);  
    return this.http.post(url , formdata, {  headers : this.authenticationService.getHttpOnlyHeaders()});  
  } 

  retriveFile(url: string ) : Observable<Blob>{ 
     //var  headers : any  = this.authenticationService.getHttpHeaders();
     //headers.responseType = 
    return this.http.get(url, { responseType: 'blob', headers :  this.authenticationService.getHttpOnlyHeaders()});  
  }
}
