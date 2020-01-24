import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '.././_services/user.service';
import { AuthenticationService } from '.././_auth/auth.service';
import { AlertMessage } from '.././_alerts/alert.message';
import { RegistrationService } from '.././_services/registration.service';
import { Registration } from '.././_models/registration';
import { NIDOSMessages } from '../_messages/message_eng';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup; 
    submitted = false;
    loading = false; 
    registration: Registration = new Registration(); 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private alertMessage: AlertMessage,
    private registrationService: RegistrationService,
    private nIDOSMessages: NIDOSMessages
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.registrationForm = this.formBuilder.group({
      id: ['', Validators.required],
      username: ['', Validators.required],
      emailId: ['', Validators.required],
      contactNumber: ['', Validators.required]
  });
  }

  get f() { return this.registrationForm.controls; }
  onSubmit() {

    this.submitted = true;  
    this.registration.role = 'GUEST';
    
    this.loading = true;
    this.registrationService.registration(this.registration)
       .subscribe(result => {
         var obj : any = result; 
         this.alertMessage.showSuccessMsg( this.nIDOSMessages.UserRegistrationSuccess + obj.userId );  
         this.router.navigate(['/login']);  
       },  
       err => {  
         console.log(err) ;
         this.alertMessage.showFailedMsg( this.nIDOSMessages.UserRegistrationFailed +":"+ err.message ); 
         this.loading = false; 
       });
}

}

