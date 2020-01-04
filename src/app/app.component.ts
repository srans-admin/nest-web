import { Component } from '@angular/core';
import { User } from './_models/User';
import { Router } from '@angular/router';
import { AuthenticationService } from './_auth/auth.service';
import { AlertMessage } from './_alerts/alert.message';
import { Role } from './_models/Role';
import { Notification } from './_models/Notification';
import { NotificationService } from './_services/notification.service';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  notification: Array<string>;
  currentUser: User; 
  notified: Notification = new Notification();

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private nIDOSMessages: NIDOSMessages,
  ) {
    this.authenticationService.currentUser.subscribe(user => 
      {
        this.currentUser = user
      }
      ); 

      this.notificationService.getNotification(this.notification);
      // this.notificationService.getNotifications();
  }

  get isAdmin() {
    return this.currentUser && this.currentUser.role === Role.Admin;
  }

  get isSuperAdmin(){
    return this.currentUser && this.currentUser.role === Role.superadmin;
  }

  get isUser(){
    return this.currentUser && this.currentUser.role === Role.user;
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  notifications(){    
    this.alertMessage.showHTMLMessage('Notifications',' Notifications Here');
  }

  profile(){  
    var loggedInUserDetails : User = this.authenticationService.getLoggedInUserDetails();

    var htmlMsg = "<br/><label> <span class=\"glyphicon glyphicon-user\"></span> Name : </label><span> "+loggedInUserDetails.name+"</span>"+
                  "<br/><label> UerId : </label><span> "+loggedInUserDetails.userId+"</span>"   +          
                  "<br/><label> Email : </label><span> "+loggedInUserDetails.emailId+"</span>"+
                  "<br/><label> Phone : </label><span> "+loggedInUserDetails.telephoneNumber+"</span>"+
                  "<br/><label> Emergency : </label><span> "+loggedInUserDetails.emergencyContactNumber+"</span>"
                  ;

    this.alertMessage.showHTMLMessage('My Profile', htmlMsg)
  }


}
