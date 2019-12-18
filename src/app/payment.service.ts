import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = 'http://localhost:8080/nest-server/api/v1/payments';
  private hostelId = 'http://localhost:8080/nest-server/api/v1/payment/hostels/{id}/roomdetail';
  private floorId = 'http://localhost:8080/nest-server/api/v1/payment/hostels/{id}/roomdetail';
  
  constructor(private http: HttpClient) { }



  getfloorId(id: number): Observable<any> {
    return this.http.get('${this.floorId}/${id}');
  }


  gethostelId(id: number): Observable<any> {
    return this.http.get('${this.hostelId}/${id}');
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
