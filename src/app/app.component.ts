import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_auth/auth.service';
import { AlertMessage } from './_alerts/alert.message';
import { Notification } from './_models/notification';
import { NotificationService } from './_services/notification.service';
import { NIDOSMessages } from './_messages/message_eng';
import { Role } from './_models/role';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  notifications: Array<Notification> = [];
  currentUser: User; 
  //messages :Array<Notification> = [];

  // notified: Notification = new Notification(); 

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private nIDOSMessages: NIDOSMessages
  ) {
    this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user 
      }); 

    this.notificationService.getNotifications().subscribe(results => {
      this.notifications = results;          
        
    
      }, err =>{
        //TODO Alert
        this.alertMessage.showHttpMessage(err);
        // this.notifications = [
        //   {
        //     "id" : 1,
        //     "message": "Ram requested for new suscription, <a> click here</a>"
        //   },
        //   {
        //     "id" : 2,
        //     "message": "Sawthi requested for new suscription, <a> click here</a>"
        //   },
        //   {
        //     "id" : 3,
        //     "message": "Hey Man, You are gone !!!"
        //   },        

        // ]; 
      });   
      
      this.notificationService.inActivateNotifications().subscribe(res => {
        this.notifications = res;
      })
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

  notification(){

    let list = '';
    for(let currNotification of this.notifications){
      list += '<p>'+currNotification.message+'</p>';
    }
     
    this.alertMessage.showHTMLMessage('Notifications', list);

    this.notificationService.inActivateNotifications();
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
