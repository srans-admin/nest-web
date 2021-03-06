import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AuthenticationService } from '../_auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private baseUrl = environment.appUrl+'/api/v1/payments';
  //private roomType = environment.appUrl+'/api/v1/payment/hostels/{id}/roomdetail';
  //private roomRent = environment.appUrl+'/api/v1/payment/hostels/{id}/roomdetail';
  //private userPayment = environment.appUrl + '/api/v1/payments/history';
  private userUrl = environment.appUrl+'/api/v1/users';

  constructor(private http: HttpClient,
              private authenticationService: AuthenticationService) { }


  // getroomType(id: number): Observable<any> {
  //   return this.http.get(`${this.roomType}/${id}`);
  // }

  getPaymentHistory(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  // getroomRent(id: number): Observable<any> {
  //   return this.http.get(`${this.roomRent}/${id}`);
  // }

  getPayment(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createPayment(payment: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, payment, this.authenticationService.getHttpHeaders());
  }

  getUserDetails(name: string): Observable<any> {
    return this.http.get(`${this.userUrl}/byname/${name}`, this.authenticationService.getHttpHeaders());
  }

  getPaymentsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getuserPaymentInfo(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}?id=${id}&role=TENANT`, this.authenticationService.getHttpHeaders());
  }

  getAllUsersPaymentInfo(aid: number, role: string): Observable<any>{
    return this.http.get(`${this.baseUrl}?id=${aid}&role=${role}`, this.authenticationService.getHttpHeaders());
  }

}
