import { Component, OnInit } from '@angular/core';
import { VacateService } from '../../_services/vacate.service';
import { AuthenticationService } from '../../_auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { Vacate } from '../../_models/vacate';
import { AlertMessage } from '../../_alerts/alert.message';
import { NIDOSMessages } from '../../_messages/message_eng';
import { HostelService } from '../../_services/hostel.service';
import { MatDialog } from '@angular/material/dialog';
import { ApproveRequestComponent } from '../approve-request/approve-request.component';


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
  private info;
  private id: number;

  constructor(private router: Router,
    private authenticationService: AuthenticationService,
    private vacateService: VacateService,
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,
    public dialog: MatDialog,
    private hostelService: HostelService) { 

      this.currentUser = this.authenticationService.currentUser;
                                
      this.getNotificationData();
    }

  ngOnInit() {
  }


  getNotificationData(){

    this.hostelService.getHostelsList(this.currentUser.userId, this.currentUser.role).subscribe(results =>{
      // console.log(results);
      this.hostels = results;      
      this.hostelName = this.hostels.hostelName;
    })

    // this.vacateService.getTenantHostel()

    this.vacateService.getUserDetails(this.currentUser.tenantBooking.tenantId).subscribe(result =>{
      // console.log(result);
      this.res = result;
    })

    this.vacateService.getVacateRequest(this.currentUser.userId).subscribe(res => {
      // console.log(res);
      this.a = res;
      this.requests = res;
      for(let j = 0;j < this.requests.length; j ++){
        this.tenantId = this.requests[j].tenantId;
        this.id = this.tenantId;
      }
      
    });

    this.vacateService.getTenantHostel(this.id).subscribe(result => {
      console.log(result);
      this.info = result;
    });

  }

  clickMethod(name: string) {
    if(confirm("Are you sure to  "+name + " ?")) {
      console.log("Implement delete functionality here");
    }
  }

  approveRequest(): void {

    const dialogRef = this.dialog.open(ApproveRequestComponent, {
      width: '50%',
      height:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     // this.animal = result;
    }); 
    
  }

}
