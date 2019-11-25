import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v3/invoice';
  constructor(private http: HttpClient) { }

  getInvoice(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInvoice(invoice: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, invoice);
  }

  // updateInvoice(id: number, value: any): Observable<Object> {
  //   return this.http.put(`${this.baseUrl}/${id}`, value);
  // }

  // deleteInvoice(id: number): Observable<any> {
  //   return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  // }

  // getInvoicesList(): Observable<any> {
  //   return this.http.get(`${this.baseUrl}`);
  }
}
