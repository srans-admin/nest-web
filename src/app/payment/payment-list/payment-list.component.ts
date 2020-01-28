import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentService } from '../../_services/payment.service';
import { Payment } from "../../_models/payment";
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_auth/auth.service';
import { User } from 'src/app/_models/user';
import { UserService } from '../../_services/user.service';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {

  // private payments: Observable<Payment[]>;
  private payments: any;
  private payment = new Payment();
  private user : User;
  private currentUser: User;
  private name: string;

  constructor(private paymentService: PaymentService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router) {
      this.currentUser = this.authenticationService.currentUser;
      
     }

  ngOnInit() {
    this.reloadData();
  }
  
  reloadData() {
    this.paymentService.getAllUsersPaymentInfo(this.currentUser.userId, this.currentUser.role).subscribe(res=>{
      console.log(res);
      this.payments = res;
      this.payment.id = this.payments.id;
      // this.name = this.currentUser.name;
      // console.log(this.name);
    })
  }

}
