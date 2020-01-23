import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { Payment } from '../../_models/payment';
import { Room } from '../../_models/room';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { Hostel } from 'src/app/_models/hostel';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  room: Room = new Room();
  user: Observable<User[]>;
  // users: User = new User();
  users : Observable<User[]>;
  roomRent: number = 12000;
  selectedUser : Hostel; 
  isUserSelected : boolean = false;
  selectedUserInfo : any = null;

  constructor(private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute, 
    private userService: UserService,
    private alertMessage: AlertMessage,
    private httpClient: HttpClient) { 
      // this.reloadUsers();
    }

    payment: Payment = new Payment();
    submitted = false;

  ngOnInit() {
    
  }

  reloadUsers(){
    this.userService.getUsersList().subscribe(res => { 
      this.users = res;
      console.log(this.users);
    },err =>{ 
      this.alertMessage.showHttpMessage(err);
  }); 
  }

  newPayment(): void {
    this.submitted = false;
    this.payment = new Payment();
  }

  save() {
    this.paymentService.createPayment(this.payment)
      .subscribe(data => console.log(data), error => console.log(error));
    this.payment = new Payment();
    this.gotoList();
  }

  populateUser(uId : number){
    
    this.userService.getUser(uId).subscribe(
      res => {   
        this.selectedUser = res;
      },
      err =>{
        console.log('FAILED:: '+err);
      }); 
  }

  onSelectedUserInfoEmited(selectedUserInfo: any){
   
    this.isUserSelected = true;
    this.selectedUserInfo = selectedUserInfo;
    this.selectedUserInfo.hostelName = this.selectedUser.hostelName;
  
    window.confirm('Hostel Name : '+this.selectedUserInfo.hostelName+'\nRoom Num: '+this.selectedUserInfo.bed.roomId + '\nBed Num: '+this.selectedUserInfo.bed.id +' \nRoom Rent : '+this.selectedUserInfo.roomRent+' \nSharing : '+this.selectedUserInfo.roomType+' \nPlease confirm your booking !!');
   
    console.log('selectedBedInfo:'+selectedUserInfo.roomRent);
  
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/payment']);
  }

}
