import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../_services/payment.service';
import { Payment } from '../../_models/payment';
import { Room } from '../../_models/room';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../_models/user';
import { UserService } from '../../_services/user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_auth/auth.service';


@Component({
selector: 'app-create-payment',
templateUrl: './create-payment.component.html',
styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

private userId : any;
private user : User;
private currentUser: User;

constructor(private paymentService: PaymentService,
private router: Router,
private userService: UserService,
private authenticationService: AuthenticationService,
private route: ActivatedRoute,
private httpClient: HttpClient) {
this.currentUser = this.authenticationService.currentUser;
}

private payment: Payment = new Payment();
private submitted = false;

ngOnInit() {
this.userId = this.route.snapshot.params['user'];
console.log('Adding payment for userId:' + this.userId);
this.userService.getUser(this.userId)
.subscribe(data => {
console.log("hostel data " + data);
this.user = data;
this.payment.userId = this.user.userId;
this.payment.roomRent = this.user.tenantBooking.roomRent;
}, error => console.log(error));
}


save() {
this.payment.adminId = this.currentUser.userId;
this.paymentService.createPayment(this.payment)
.subscribe(data => {
console.log(data) ;
this.gotoList();
}, error => console.log(error));

}


onSubmit() {
this.submitted = true;
this.save();
}

gotoList() {
this.router.navigate(['/payment']);
}

}