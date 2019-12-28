import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

 private baseUrl = 'http://localhost:8080/nest-server/api/v1/categories';

  constructor(private http: HttpClient) { }

  getCategory(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createCategory(category: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, category);
  }

  updateCategory(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteCategory(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCategorysList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
