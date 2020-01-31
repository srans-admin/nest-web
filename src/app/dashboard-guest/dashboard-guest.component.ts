import { Component, OnInit } from '@angular/core';
import { HostelService } from '../_services/hostel.service';
import { AlertMessage } from 'src/app/_alerts/alert.message';

@Component({
  selector: 'app-dashboard-guest',
  templateUrl: './dashboard-guest.component.html',
  styleUrls: ['./dashboard-guest.component.css']
})
export class DashboardGuestComponent implements OnInit {

  private hostels;

  constructor(private hostelService: HostelService,
              private alertMessage: AlertMessage) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {

    this.hostelService.getAllHostels().subscribe(res => { 
    console.log(res);
       this.hostels = res;
     },err =>{ 
       this.alertMessage.showHttpMessage(err);
     });

   }

}
