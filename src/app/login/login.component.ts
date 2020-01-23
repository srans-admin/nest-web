 import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_auth/auth.service';
import { UserService } from '../_services/user.service';
import { AlertMessage } from '../_alerts/alert.message';

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
      private authenticationService: AuthenticationService 
  ) {
      // redirect to home if already logged in
      //if (!this.authenticationService.currentUserValue) {
      //    this.router.navigate(['/']);
      //}
  }

  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          username: ['bhai', Validators.required],
          password: ['J9OZBYZ8', Validators.required]
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

      this.loading = true;
       this.authenticationService.login(this.f.username.value, this.f.password.value) 
           .subscribe(
               data => {  
                   this.authenticationService.setAccessToken(data); 

                   this.userService.getUserDetails(this.f.username.value).subscribe(
                    data => { 
                        if(data == null || data === undefined){
                            this.alertMessage.showFailedMsg('UserInfo not found on server for the user:'+this.f.username.value+' : '+data); 
                        } 
                        this.authenticationService.saveUserDetails(data);
                        this.loading = false; 
                        this.router.navigate([this.returnUrl]); 
                    },
                    error => { 
                        this.alertMessage.showFailedMsg('Unable to get User Info : '+error.error.error_description); 
                        this.loading = false;
                    });
               },
               error => { 
                this.alertMessage.showFailedMsg('Invalid Credentials : '+error.error.error_description); 
                this.loading = false;
               });
               
  }
}
