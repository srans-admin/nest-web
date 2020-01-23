import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '.././_models/user';
import { UserService } from '.././_services/user.service';
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
  private room : Room;
  
  paymentStatus : boolean = false;
  informingDate = new Date("12/29/2019");
  vacatingDate= new Date();
  presentDate = new Date("01/15/2020");
  Deposit : number = 12000;
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

  constructor(private router: Router,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private vacateService: VacateService,
              private alertMessage: AlertMessage,
              private nIDOSMessages: NIDOSMessages) { 

                this.currentUser = this.authenticationService.currentUser;
              }

  ngOnInit() {
  }

  onSubmit(){
    // this.getRefundAmount();
    this.vacateService.createVacate(this.vacate).subscribe( res => {
      console.log(res);
    },  
      err => {  
        this.alertMessage.showFailedMsg( this.nIDOSMessages.HostelCreationFailed + err.message );
      });
  }

  getRefundAmount(){
    this.diffTime = Math.abs(this.vacatingDate.getTime() - this.informingDate.getTime());
    this.diffDays = Math.ceil(this.diffTime/(1000 * 3600 * 24));

    if((this.diffDays == this.informDays) && (this.vacatingDate < this.presentDate)){
      // this.countDays = this.daysInMonth -  this.daysStayed;
      this.perDayAmount = this.Deposit / this.daysInMonth;
      this.amountToDeduct = this.daysStayed * this.perDayAmount;
      // this.refundAmount = this.Deposit - this.maintainanceCharges - this.amountToDeduct;
      this.refundAmount = this.refundAmount;
      this.vacatingDate = this.vacatingDate;
      this.description = this.description;
    }
  }


}
