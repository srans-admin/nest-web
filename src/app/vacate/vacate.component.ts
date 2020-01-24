import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '.././_models/user';
import { TenantBooking } from '.././_models/tenant-booking';
import { AuthenticationService } from '.././_auth/auth.service';
import { Room } from '.././_models/room';
import { Vacate } from '.././_models/vacate';
import { VacateService } from '.././_services/vacate.service';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';

@Component({
  selector: 'app-vacate',
  templateUrl: './vacate.component.html',
  styleUrls: ['./vacate.component.css']
})
export class VacateComponent implements OnInit {

  private currentUser: User;
  vacate : Vacate = new Vacate();
  private tenant : TenantBooking;
  private room : Room;
  
  paymentStatus : boolean = false;
  informingDate = new Date();
  vacatingDate= new Date();
  presentDate = new Date();
  depositAmount : number = 12000;
  perDayAmount : number ;
  refundAmount : number;
  maintainanceCharges : number = 1000;
  daysInMonth : number = 30;
  daysStayed : number = 13;
  diffDays : number;
  diffTime : any;
  amountToDeduct : number;
  informDays : number = 15;
  countDays : number;
  description : string;

  tenantId: number;
  floorId: number;
  roomId: number;
  roomBedId: number;


  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private vacateService: VacateService,
              private alertMessage: AlertMessage,
              private nIDOSMessages: NIDOSMessages) { 

                this.currentUser = this.authenticationService.currentUser;
                                
                this.getUserData();
              }

  ngOnInit() {
  }

  onSubmit(){
    // this.getRefundAmount();
    this.vacateTenant();
  }

  vacateTenant(){
    this.vacateService.createVacate(this.vacate).subscribe( res => {
      console.log(res);
    },  
      err => {  
        this.alertMessage.showFailedMsg( this.nIDOSMessages.HostelCreationFailed + err.message );
      });
      this.goToVacate();
  }

  // getRefundAmount(){
  //   this.diffTime = Math.abs(this.vacatingDate.getTime() - this.informingDate.getTime());
  //   this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));

  //   if((this.diffDays == this.informDays) && (this.vacatingDate < this.presentDate)){
  //     // this.countDays = this.daysInMonth -  this.daysStayed;
  //     this.perDayAmount = this.depositAmount / this.daysInMonth;
  //     this.amountToDeduct = this.daysStayed * this.perDayAmount;
  //     // this.refundAmount = this.depositAmount - this.maintainanceCharges - this.amountToDeduct;
  //     this.refundAmount = this.refundAmount;
  //     this.vacatingDate = this.vacatingDate;
  //     this.description = this.description;
  //   }
  // }

  getAmount(){

    this.diffTime = Math.abs(this.vacatingDate.getTime() - this.informingDate.getTime());
    this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));
    this.perDayAmount = this.depositAmount / 30;

      if((this.diffDays == this.informDays) && (this.vacatingDate > this.informingDate)){

        this.refundAmount = this.depositAmount - this.maintainanceCharges;
      }
      else if((this.diffDays != this.informDays) && (this.vacatingDate < this.informingDate)){

        this.diffTime = Math.abs(this.informingDate.getTime() - this.vacatingDate.getTime());
        this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));

        this.amountToDeduct = this.diffDays * this.perDayAmount;
        this.refundAmount = this.depositAmount - this.maintainanceCharges - this.amountToDeduct;

      }
      else{
        this.refundAmount = - (this.maintainanceCharges);
      }
  }

  goToVacate(){
    this.router.navigate(['/vacateMe']);
  }

  getUserData(){
    this.vacateService.getUserDetails(this.currentUser.userId).subscribe(res => { 
      this.currentUser = res;
      this.tenantId = this.currentUser.userId;
      this.floorId = this.currentUser.tenantBooking.floorId;
      this.roomId = this.currentUser.tenantBooking.roomId;
      this.roomBedId = this.currentUser.tenantBooking.roomBedId;
    },err =>{ 
      this.alertMessage.showHttpMessage(err);
    });
  }

}
