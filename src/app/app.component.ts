import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router, provideRoutes } from '@angular/router';
import { AuthenticationService } from './_auth/auth.service';
import { AlertMessage } from './_alerts/alert.message';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { Notification } from './_models/notification';
import { NotificationService } from './_services/notification.service';
import { NIDOSMessages } from './_messages/message_eng';
// import { MatBadgeModule } from '@angular/material';
import { Role } from './_models/role';
 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
  
export class AppComponent {  
    
  private notifications: Array<Notification> = [];
  private tokenInfo;  
  private userInfo : User; 
  
  private isSuperAdmin: boolean = false;
  private isAdmin: boolean = false;
  private isGuest: boolean = false;
  private isTenant: boolean = false;  

  currentUser: User; 
  // id  = this.userInfo.userId;
  id = 1000;
  //messages :Array<Notification> = [];

  // notified: Notification = new Notification(); 
 

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    // private matBadge: MatBadgeModule,
    private authenticationService: AuthenticationService,
    private notificationService: NotificationService,
    private nIDOSMessages: NIDOSMessages

  ) {    
    
      this.authenticationService.getCurrentUserEmitorEvent().subscribe(user => { 
          
        this.userInfo  = user;
        console.log( "Login trigger received  :  "+ this.userInfo ); 
        this.defineRole(); 
        if(this.userInfo){
        this.notificationService.getNotifications(this.userInfo.userId).subscribe(results => {
             console.log("notifications: " + results);
             this.notifications = results; 
          }, err =>{ 
            // this.alertMessage.showFailedMsg(err.message); 
            console.log(err.message);
          });  
          
        }

    }, err => {
      console.log( "Login trigger unable recieve  : "+ this.userInfo );
    });
        
    

  }

  ngOnInit() {
      // this.authenticationService.getCurrentUserEmitorEvent().subscribe(user => { 
         
      //    this.userInfo  = user;
      //    console.log( "Login trigger received  :  "+ this.userInfo ); 
      //    this.defineRole(); 

      // }, err => {
      //   console.log( "Login trigger unable recieve  : "+ this.userInfo );
      // });

      
  }
   

  defineRole() { 
    this.isSuperAdmin = (this.userInfo) ? this.userInfo.role == 'SUPERADMIN' : false;
    this.isAdmin = (this.userInfo) ? this.userInfo.role == 'ADMIN' : false;
    this.isGuest = (this.userInfo) ? this.userInfo.role == 'GUEST' : false;
    this.isTenant = (this.userInfo) ? this.userInfo.role == 'TENANT' : false; 
  }

  logout() {
    console.log('Logout called');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  showNotifications(){
    
    let list = '';
    for(let currNotification of this.notifications){
      // list += '<p>'+currNotification.message+'</p>';
      list += "<div style=\"width: 18rem;\"><ul><li (click)=alert('hi...')>"+ currNotification.message +
        "</li></ul></div>";
        // list += "<div style=\"width: 18rem; \"><button class=\"btn btn-primary\">" + currNotification.message + "</button></div>";
    }
     
    this.alertMessage.showHTMLMessage('Notifications', list); 
    // console.log('Notifications', list);
    
    this.notificationService.inActivateNotifications(this.userInfo.userId).subscribe(results => {
      console.log("inactivated notifications: " + results); 
     }, err =>{ 
        // this.alertMessage.showFailedMsg(err.message); 
        console.log(err.message);
     });  
     this.notifications.length = null;
  }

  profile(){  
    //var this.userInfo : User = this.authenticationService.getLoggedInUserDetails();

    var htmlMsg = "<br/><label><span class=\"glyphicon glyphicon-camera\"></span> TenantPic : </label><span> "+this.userInfo.userpic+"</span>"+
    "<br/><label> <span class=\"glyphicon glyphicon-user\"></span> Name : </label><span> "+this.userInfo.name+"</span>"+
                  "<br/><label> UerId : </label><span> "+this.userInfo.userId+"</span>"   +          
                  "<br/><label> Email : </label><span> "+this.userInfo.emailId+"</span>"+
                  "<br/><label> Phone : </label><span> "+this.userInfo.telephoneNumber+"</span>"+
                  "<br/><label> Emergency : </label><span> "+this.userInfo.emergencyContactNumber+"</span>"
                  ;

    this.alertMessage.showHTMLMessage('My Profile', htmlMsg)
  }


}
