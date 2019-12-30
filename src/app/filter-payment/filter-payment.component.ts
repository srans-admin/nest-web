import { Component, OnInit } from '@angular/core';
import { HostelService } from ".././_services/hostel.service";
import { Observable } from 'rxjs';
import { Hostel } from '../_models/hostel';
import { PaymentService } from "src/app/_services/payment.service";
import { Payment } from '.././_models/payment';

@Component({
  selector: 'app-filter-payment',
  templateUrl: './filter-payment.component.html',
  styleUrls: ['./filter-payment.component.css']
})
export class FilterPaymentComponent implements OnInit {
  hostels: Observable<Hostel[]>;
  payments: Observable<Payment[]>;
  
  constructor(private hostelService: HostelService,
              private paymentService: PaymentService) { }

  ngOnInit() {
  }

}
