import { Component } from '@angular/core';
import { User } from './_models/user';
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
    this.authenticationService.currentUser.subscribe(user => 
      {
        this.currentUser = user 
      }
      ); 
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  notifications(){
    this.alertMessage.showHTMLMessage('Notifications',' Notifications Here')
  }

  profile(){  
    var loggedInUserDetails : User = this.authenticationService.getLoggedInUserDetails();

    var htmlMsg = "<br/><label><span class=\"glyphicon glyphicon-camera\"></span> TenantPic : </label><span> "+loggedInUserDetails.userpic+"</span>"+
    "<br/><label> <span class=\"glyphicon glyphicon-user\"></span> Name : </label><span> "+loggedInUserDetails.name+"</span>"+
                  "<br/><label> UerId : </label><span> "+loggedInUserDetails.userId+"</span>"   +          
                  "<br/><label> Email : </label><span> "+loggedInUserDetails.emailId+"</span>"+
                  "<br/><label> Phone : </label><span> "+loggedInUserDetails.telephoneNumber+"</span>"+
                  "<br/><label> Emergency : </label><span> "+loggedInUserDetails.emergencyContactNumber+"</span>"
                  ;

    this.alertMessage.showHTMLMessage('My Profile', htmlMsg)
  }


}
