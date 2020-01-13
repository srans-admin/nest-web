import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentService } from '../../_services/payment.service';
import { Payment } from "../../_models/payment";
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_auth/auth.service';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.css']
})
export class UserPaymentComponent implements OnInit {
  payments: Observable<Payment[]>;
  id: number;
  private currentUser: User; 
  
  constructor(private paymentService: PaymentService,
              private router: Router,
              private authenticationService: AuthenticationService) { 
                this.currentUser = this.authenticationService.currentUser;
                this.reloadData();
              }

  ngOnInit() {
    this.reloadData();

  }

  reloadData() {
    // this.payments = this.paymentService.getPaymentsList();
    this.id = this.currentUser.userId;
    this.payments = this.paymentService.getuserPaymentInfo(this.id);
  }

}




