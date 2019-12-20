import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { PaymentService } from '../../payment.service';
import { Payment } from "../../payment";
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.component.html',
  styleUrls: ['./payment-list.component.css']
})
export class PaymentListComponent implements OnInit {
  payments: Observable<Payment[]>;

  constructor(private paymentService: PaymentService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.payments = this.paymentService.getPaymentsList();
  }

}