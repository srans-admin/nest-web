import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = environment.appUrl+'/api/v1/expenses';

  constructor(private http: HttpClient) { }

  getExpense(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createExpense(expense: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, expense);
  }

  updateExpense(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getExpensesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
