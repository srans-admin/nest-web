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
import { Form, NgForm } from '@angular/forms';

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
  
  private paymentStatus : boolean = false;
  private informingDate = new Date();
  private vacatingDate= new Date();
  private presentDate = new Date();
  private depositAmount : number = 12000;
  private perDayAmount : number ;
  private refundAmount : number;
  private maintainanceCharges : number = 1000;
  private daysInMonth : number = 30;
  private daysStayed : number = 13;
  private diffDays : number;
  private diffTime : any;
  private amountToDeduct : number;
  private informDays : number = 15;
  private countDays : number;
  private description : string;

  private tenantId: number;
  private floorId: number;
  private roomId: number;
  private roomBedId: number;
  private roomRent: number;

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
        this.alertMessage.showSuccessMsg(  'Vacation request sent to administrator, please check your email for more information. Keep look at Vaction Status.');
        this.goToHome();
      },  
      err => {  
        this.alertMessage.showFailedMsg( this.nIDOSMessages.HostelCreationFailed + err.message );
      });
    
  } 

  getRefundAmount(){

    this.diffTime = Math.abs(this.vacatingDate.getTime() - this.informingDate.getTime());
    this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));
    this.perDayAmount = this.depositAmount / 30;

      if((this.diffDays >= this.informDays) && (this.vacatingDate > this.informingDate)){

        this.vacate.refundAmount = this.depositAmount - this.maintainanceCharges;
      }
      else if((this.diffDays <= this.informDays) || (this.vacatingDate < this.informingDate)){

        this.diffTime = Math.abs(this.informingDate.getTime() - this.vacatingDate.getTime());
        this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));

        this.amountToDeduct = this.diffDays * this.perDayAmount;
        this.vacate.refundAmount = this.depositAmount - this.maintainanceCharges - this.amountToDeduct;

      }
      else{
        this.vacate.refundAmount = - (this.maintainanceCharges);
      }
  }

  goToHome(){
    this.router.navigate(['/profile']);
  }

  getUserData(){
    this.vacateService.getUserDetails(this.currentUser.userId).subscribe(res => {    
      console.log(res);
      this.currentUser = res;
      this.vacate.tenantId = this.currentUser.userId;
      this.floorId = this.currentUser.tenantBooking.floorId;
      this.roomId = this.currentUser.tenantBooking.roomId;
      this.roomBedId = this.currentUser.tenantBooking.roomBedId;
      this.roomRent = this.currentUser.tenantBooking.roomRent;
    },err =>{ 
      console.log('Unable to get Userdetails from server: '+err); 
    });
  }

}
