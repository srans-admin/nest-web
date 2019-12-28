import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { Payment } from '../../_models/payment';
import { Room } from '../../_models/room';
import { Router } from '@angular/router';
import { User } from '../../_models/User';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  room: Room = new Room();
  user: Observable<User[]>;
  users: User = new User();

  constructor(private paymentService: PaymentService,
    private router: Router, 
    private userService: UserService,
    private httpClient: HttpClient) { }

    payment: Payment = new Payment();
    submitted = false;

  ngOnInit() {
  }

  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  }

  save() {
    this.paymentService.createPayment(this.payment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payment = new Payment();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/payment']);
  }

}
