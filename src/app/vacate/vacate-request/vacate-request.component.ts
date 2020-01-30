import { Component, OnInit } from '@angular/core';
import { VacateService } from '../../_services/vacate.service';
import { AuthenticationService } from '../../_auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { Vacate } from '../../_models/vacate';
import { AlertMessage } from '../../_alerts/alert.message';
import { NIDOSMessages } from '../../_messages/message_eng';
import { HostelService } from '../../_services/hostel.service';


@Component({
  selector: 'app-vacate-request',
  templateUrl: './vacate-request.component.html',
  styleUrls: ['./vacate-request.component.css']
})
export class VacateRequestComponent implements OnInit {

  private currentUser : User;
  vacate : Vacate = new Vacate();

  private tenantId: number;
  private floorId: number;
  private roomId: number;
  private roomBedId: number;
  private roomRent: number;
  private tenantName: string;
  private msg: string;
  private a: Array<any>;
  private i: number;
  private res: any;
  private requests;
  private hostels;
  private hostelName;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private vacateService: VacateService,
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,
    private hostelService: HostelService) { 

      this.currentUser = this.authenticationService.currentUser;
                                
      this.getNotificationData();
    }

  ngOnInit() {
  }

  getNotificationData(){

    this.hostelService.getHostelsList(this.currentUser.userId, this.currentUser.role).subscribe(results =>{
      console.log(results);
      this.hostels = results;      
      this.hostelName = this.hostels.hostelName;
    })

    

    this.vacateService.getUserDetails(this.currentUser.userId).subscribe(result =>{
      console.log(result);
      this.res = result;
    })

    this.vacateService.getVacateRequest(this.currentUser.userId).subscribe(res => {
      console.log(res);
      this.a = res;
      this.requests = res;
    }, err =>{
      console.log(err);
    });
  }

}
