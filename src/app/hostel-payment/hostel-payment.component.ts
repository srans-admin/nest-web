import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Hostel } from '.././_models/hostel';
import { HostelService } from '.././_services/hostel.service';
import { AuthenticationService } from '../_auth/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-hostel-payment',
  templateUrl: './hostel-payment.component.html',
  styleUrls: ['./hostel-payment.component.css']
})
export class HostelPaymentComponent implements OnInit {

  private currentUser: User;
  
  constructor(private hostelService:HostelService,
              private router: Router,
              private route: ActivatedRoute,
              private authenticationService: AuthenticationService,
              private http: HttpClient) { 
                this.currentUser = this.authenticationService.currentUser;
              }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.hostelService.getHostelsList(this.currentUser.userId);
  }

}
