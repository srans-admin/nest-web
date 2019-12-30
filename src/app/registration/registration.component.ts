import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UserService } from '.././_services/user.service';
import { AuthenticationService } from '.././_auth/auth.service';
import { AlertMessage } from '.././_alerts/alert.message';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
    loading = false;
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService,
   private alertMessage: AlertMessage
  ) { 
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
  }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      emailId: ['', Validators.required],
      phonenumber: ['', Validators.required],      
      password: ['', [Validators.required, Validators.minLength(6)]],
      conformpassword: ['', [Validators.required, Validators.minLength(6)]]
  });
  }

  get f() { return this.registerForm.controls; }
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.register(this.registerForm.value)
        .pipe(first())
        .subscribe(
            data => {
                this.alertMessage.success('Registration successful', true);
                this.router.navigate(['/login']);
            },
            error => {
                this.alertMessage.error(error);
                this.loading = false;
            });
}

}

