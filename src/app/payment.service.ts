import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/payments';
  private roomType = 'http://localhost:8080/nest-server/api/v1/payment/hostels/{id}/roomdetail';
  private roomRent = 'http://localhost:8080/nest-server/api/v1/payment/hostels/{id}/roomdetail';
  
  constructor(private http: HttpClient) { }



  getroomType(id: number): Observable<any> {
    return this.http.get(`${this.roomType}/${id}`);
  }


  getroomRent(id: number): Observable<any> {
    return this.http.get(`${this.roomRent}/${id}`);
  }

  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPayment(payment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, payment);
  }

  getPaymentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
