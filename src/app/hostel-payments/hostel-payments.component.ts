import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { Hostel } from '.././_models/hostel';
import { HostelService } from '.././_services/hostel.service';
import { Observable } from "rxjs";

@Component({
  selector: 'app-hostel-payments',
  templateUrl: './hostel-payments.component.html',
  styleUrls: ['./hostel-payments.component.css']
})
export class HostelPaymentsComponent implements OnInit {
  hostels: Observable<Hostel[]>;

  constructor(private hostelService:HostelService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.hostelService.getHostelsList();
    }

}
