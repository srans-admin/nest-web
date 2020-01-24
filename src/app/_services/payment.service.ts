import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = environment.appUrl+'/api/v1/payment';
  private roomType = environment.appUrl+'/api/v1/payment/hostels/{id}/roomdetail';
  private roomRent = environment.appUrl+'/api/v1/payment/hostels/{id}/roomdetail';
  
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
