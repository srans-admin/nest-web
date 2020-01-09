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

  constructor(private paymentService: PaymentService,
    private router: Router,
    private route: ActivatedRoute, 
    private userService: UserService,
    private alertMessage: AlertMessage,
    private httpClient: HttpClient) { 
      this.reloadUsers();
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

  // populateUser(userId : number){
  
  //   this.userService.getUser(userId).subscribe(      
  //     err =>{
  //       console.log('FAILED:: '+err);
  //     }); 
  // }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/payment']);
  }

}
