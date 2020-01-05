import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hostel } from '.././_models/hostel';
import { HostelService } from '.././_services/hostel.service';

@Component({
  selector: 'app-hostel-payment',
  templateUrl: './hostel-payment.component.html',
  styleUrls: ['./hostel-payment.component.css']
})
export class HostelPaymentComponent implements OnInit {

  constructor(private hostelService:HostelService,
              private router: Router,
              private route: ActivatedRoute,
              private http: HttpClient) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.hostelService.getHostelsList();
  }

}
