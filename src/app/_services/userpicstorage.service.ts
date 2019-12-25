import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserpicstorageService {

  private baseUrl = environment.appUrl+'/api/v1/tenants';

  constructor(private http: HttpClient) { }

  uploadFile(url: string, file: File ) : Observable<any>{   
    console.log('File to upload here: '+file);
    const formdata: FormData = new FormData();  
    formdata.append('file', file);  
    return this.http.post(url , formdata);  
  } 

  retriveFile(url: string ) : Observable<Blob>{  
    return this.http.get(url, { responseType: 'blob' });  
  }
}
