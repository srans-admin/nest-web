import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserpicstorageService } from '././userpicstorage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/tenant';

  // getCategories(): Observable<any> {
  //   const httpOptions = {
  //        headers: new HttpHeaders({
  //        'Content-Type': 'application/json',
  //        'Access-Control-Allow-Origin' : '*',
  //        'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE'
  //        })
  //    };
  //   return this.http.post<any>(this.baseUrl+'api', JSON.stringify({"type":"get_categories"}), httpOptions )
  //    .pipe((result) => console.log('result-->',result))       
  //  }


  constructor(private http: HttpClient,
    private userpicStorageService: UserpicstorageService) { }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createUser(user: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, user);
  }

  updateUser(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getUsersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
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
