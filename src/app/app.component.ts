import { Component } from '@angular/core';
import { User } from './_models/user';
import { Router, provideRoutes } from '@angular/router';
import { AuthenticationService } from './_auth/auth.service';
import { AlertMessage } from './_alerts/alert.message';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
export class AppComponent { 

  private tokenInfo;  
  private userInfo : User; 

  private isSuperAdmin: boolean = false;
  private isAdmin: boolean = false;
  private isUser: boolean = false;
  private isTenant: boolean = false; 

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    private authenticationService: AuthenticationService 
  ) { 
    // this.authenticationService.currentUser.subscribe(user => 
    //   {
    //     console.log( "Login Trigger received  :  "+ this.userInfo );
    //     this.tokenInfo = user ;
    //     //this.currentUser = this.authenticationService.getLoggedInUserDetails();
    //     this.userInfo = this.authenticationService.getLoggedInUserDetails();
    //     console.log( "Currently Logged user : "+ this.userInfo.role);
    //     this.defineRole();
    //   },err =>{
    //     console.log( "Login Trigger unable recieve  : "+ this.userInfo );
    //   }
    //   );
  }

  ngOnInit() {
      this.authenticationService.getCurrentUserEmitorEvent().subscribe(user => { 
         
         this.userInfo  = user;
         console.log( "Login trigger received  :  "+ this.userInfo ); 
         this.defineRole(); 

      }, err => {
        console.log( "Login trigger unable recieve  : "+ this.userInfo );
      });
    
  }
   

  defineRole() {
    this.isSuperAdmin = (this.userInfo) ? this.userInfo.role == 'SUPERADMIN' : false;
    this.isAdmin = (this.userInfo) ? this.userInfo.role == 'ADMIN' : false;
    this.isUser = (this.userInfo) ? this.userInfo.role == 'USER' : false;
    this.isTenant = (this.userInfo) ? this.userInfo.role == 'TENANT' : false;
  }

  logout() {
    console.log('Logout called');
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

  notifications(){
    this.alertMessage.showHTMLMessage('Notifications',' Notifications Here')
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
