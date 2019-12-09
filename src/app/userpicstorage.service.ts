import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserpicstorageService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/tenant';

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
