 import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_auth/auth.service';
import { UserService } from '../_services/user.service';
import { AlertMessage } from '../_alerts/alert.message';
import { NotificationService } from '.././_services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private alertMessage: AlertMessage,
      private authenticationService: AuthenticationService,
      private notificationService: NotificationService 
  ) {
      // redirect to home if already logged in
      if (this.authenticationService.currentUserValue) {
          this.router.navigate(['/']);
      }
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['superadmin', Validators.required],
          password: ['superadmin', Validators.required]
      });

      // get return url from route parameters or default to '/'
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true; 

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }
    
      this.notificationService.getNotification(this.loginForm.value);

      

      this.loading = true;
       this.authenticationService.login(this.f.username.value, this.f.password.value) 
           .subscribe(
               data => { 
                   console.log('Login Success: '+data);
                   this.authenticationService.setAccessToken(data);

                   //TODO Need to get User Details on successfull login and from UAA server
                   this.userService.getUserDetails(this.f.username.value).subscribe(
                    data => {  
                        this.authenticationService.saveUserDetails(data);
                    },
                    error => { 
                        this.alertMessage.showFailedMsg('Unable to get User Info : '+error.error.error_description); 
                    });

                   this.router.navigate([this.returnUrl]);
                   //this.router.navigate(['/']);
               },
               error => { 
                this.alertMessage.showFailedMsg('Invalid Credentials : '+error.error.error_description); 
                this.loading = false;
               });
               
  }
}
