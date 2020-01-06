import { Component, OnInit } from '@angular/core';
import { User, TmpUsr } from '.././_models/user';
import { UserService } from '.././_services/user.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '.././_auth/auth.service';
import { AlertMessage } from '.././_alerts/alert.message';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  users:  any;
  acknoldgmentMsg : string = null;
  userImages: Array<TmpUsr> = [];
  currentUser: User;

  // userpic:any;

  constructor(
    private alertMessage: AlertMessage,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { 
    
  }

  ngOnInit() {
    // this.profile();
    // this.reloadData();

    // this.authenticationService.getCurrentUserEmitorEvent().subscribe(user => {
    //   this.currentUser = user;
    //   console.log(this.currentUser.name);
    // })

    this.currentUser;

  }

     profile(){  
      // var loggedInUserDetails : User = this.authenticationService.getLoggedInUserDetails();
  
      var htmlMsg = "<br/><label><span class=\"glyphicon glyphicon-camera\"></span> TenantPic : </label><span> "+this.currentUser.userpic+"</span>"+
      "<br/><label> <span class=\"glyphicon glyphicon-user\"></span> Name : </label><span> "+this.currentUser.name+"</span>"+
                    "<br/><label> UerId : </label><span> "+this.currentUser.userId+"</span>"   +          
                    "<br/><label> Email : </label><span> "+this.currentUser.emailId+"</span>"+
                    "<br/><label> Phone : </label><span> "+this.currentUser.telephoneNumber+"</span>"+
                    "<br/><label> Emergency : </label><span> "+this.currentUser.emergencyContactNumber+"</span>"
                    ;
  
      this.alertMessage.showHTMLMessage('My Profile', htmlMsg)
    
  }

//   reloadData(){
//     this.userService.getUsersList().subscribe(res => { 
//       console.log(res);
//       this.users = res; 
//       this.users.forEach(element => { 
//         //for( let element of elements){
//         this.userService.retriveFile('userpic',  element.userId) 
//           .subscribe(data => { 
//               this.createImageFromBlob(element.userId, data); 
//               this.userpic = data;
//             },  
//             err => {  
//               this.acknoldgmentMsg = "Tenant Image Retrival failed ."+err;
//               console.log(this.acknoldgmentMsg );  
//             });
//           //}
//           });
//           //console.log('this.userImages: '+this.userImages);
          

//           //

//     },err =>{ 
//         this.alertMessage.showHttpMessage(err);
//     }); 
//   }

//   createImageFromBlob(userId: any, image: Blob) {
//     let reader = new FileReader();
//     reader.addEventListener("load", () => { 
//       // this.userImages.set(userId,  reader.result);
//       let usr = new TmpUsr();
//       usr.userId = userId;
//       usr.pic = reader.result;
//       this.userImages.push(usr);
//     }, false); 
//     if (image) {
//        reader.readAsDataURL(image);
//     }
//  }

 //

 

 //

 bringMyImage(userId){
  for(let user of this.userImages){
  
    if(user.userId == userId){
      return user.pic;
    }

  }

 }

}
