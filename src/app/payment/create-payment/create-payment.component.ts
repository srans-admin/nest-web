import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { Payment } from '../../_models/payment';
import { Room } from '../../_models/room';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  room: Room = new Room();

  constructor(private paymentService: PaymentService,
    private router: Router) { }

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
