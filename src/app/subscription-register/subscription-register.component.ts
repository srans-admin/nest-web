import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/_models/subscription';
import { SubscriptionService } from 'src/app/_services/subscription.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AlertMessage } from '../_alerts/alert.message';
import { NIDOSMessages } from '../_messages/message_eng';

@Component({
  selector: 'app-subscription-register',
  templateUrl: './subscription-register.component.html',
  styleUrls: ['./subscription-register.component.css']
})
export class SubscriptionRegisterComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService,
              private router: Router,
              private alertMessage: AlertMessage, 
              private nIDOSMessages: NIDOSMessages
              ) { }

  subscription: Subscription = new Subscription();
    submitted = false;


  ngOnInit() {

    this.subscription.role="ADMIN";
    this.subscription.subscriptions=1;
  }

  newSubscription(): void {
    this.submitted = false;
    this.subscription = new Subscription();
  }

  save() {
    this.subscriptionService.createSubscription(this.subscription)
    .subscribe(result => {
      var obj : any = result; 
      this.alertMessage.showSuccessMsg( this.nIDOSMessages.UserRegistrationSuccess +":"+ obj.userId );  
      this.router.navigate(['/login']);  
    },  
    err => {   
      this.alertMessage.showFailedMsg( this.nIDOSMessages.UserRegistrationFailed +":"+ err.message );  
    });
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/']);
  }
}
