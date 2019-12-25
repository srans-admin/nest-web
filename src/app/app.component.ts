import { Component } from '@angular/core';
import { User } from './_models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from './_auth/auth.service';
import { AlertMessage } from './_alerts/alert.message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  currentUser: User;  

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    private authenticationService: AuthenticationService
    
  ) {
    this.authenticationService.currentUser.subscribe(x => 
      {
        this.currentUser = x 
      }
      );
     //this.authenticationService.isUserLoggedIn().subscribe(x => this.loginStatus = x);
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  notifications(){
    this.alertMessage.showHTMLMessage('Notifications',' Notifications Here')
  }

  profile(){  
    var loggedInUserDetails = this.authenticationService.getLoggedInUserDetails();
    this.alertMessage.showHTMLMessage('Profile Info', loggedInUserDetails)
  }


}
