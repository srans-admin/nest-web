import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '.././_services/user.service';
import { AuthenticationService } from '.././_auth/auth.service';
import { AlertMessage } from '.././_alerts/alert.message';
import { RegistrationService } from '.././_services/registration.service';
import { Registration } from '.././_models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
    loading = false;
    submitted = false;
    // registration = false;
    registration: Registration = new Registration();
  nIDOSMessages: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
   private alertMessage: AlertMessage,
   private registrationService: RegistrationService
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
      phonenumber: ['', Validators.required],      
      // password: ['', [Validators.required, Validators.minLength(6)]],
      // confirmpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registrationForm.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
        return;
    }

    this.loading = true;
       this.registrationService.registration(this.registration)
       .subscribe(result => {
         var obj : any=result;
         console.log(result);
        // this.alertMessage.showSuccessMsg( this.nIDOSMessages.UserRegistrationSuccess + obj.userId );  
        this.router.navigate(['/login']);

       })
}

}

