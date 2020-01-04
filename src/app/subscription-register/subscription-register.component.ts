import { Component, OnInit } from '@angular/core';
import { Subscription } from 'src/app/_models/subscription';
import { SubscriptionService } from 'src/app/_services/subscription.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-register',
  templateUrl: './subscription-register.component.html',
  styleUrls: ['./subscription-register.component.css']
})
export class SubscriptionRegisterComponent implements OnInit {

  constructor(private subscriptionService: SubscriptionService,
              private router: Router) { }

  subscription: Subscription = new Subscription();
    submitted = false;


  ngOnInit() {
  }

  newSubscription(): void {
    this.submitted = false;
    this.subscription = new Subscription();
  }

  save() {
    this.subscriptionService.createSubscription(this.subscription)
      .subscribe(data => console.log(data), error => console.log(error));
    this.subscription = new Subscription();
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
