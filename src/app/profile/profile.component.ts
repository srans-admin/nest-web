import { Component, OnInit } from '@angular/core';
import { User, TmpUsr } from '.././_models/user';
import { UserService } from '.././_services/user.service';
import { HostelService } from ".././_services/hostel.service";
import { Hostel } from ".././_models/hostel";
import { Router } from '@angular/router';
import { AuthenticationService } from '.././_auth/auth.service';
import { AlertMessage } from '.././_alerts/alert.message';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ProfileChangepasswordComponent } from './profile-changepassword/profile-changepassword.component';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  
  private users:  any;
  private hostels;
  private acknoldgmentMsg : string = null;
  private userImages: Array<TmpUsr> = [];
  private currentUser: User; 
  private userpic: any;
  
  
 
  constructor(
    private hostelService: HostelService,
    private alertMessage: AlertMessage,
    private router: Router,
    public dialog: MatDialog,
    private userService: UserService,
    private authenticationService: AuthenticationService 
  ) {  
    this.currentUser = this.authenticationService.currentUser;

    //Retrive currestUser Image
    this.userService.retriveFile('userpic',  this.currentUser.userId) 
          .subscribe(data => { 
              this.createImageFromBlob(data); 
            },
            err => {  
              this.acknoldgmentMsg = "Unable to load image from server."+err;
              //this.alertMessage.showFailedMsg(this.acknoldgmentMsg );  
              console.log('Unable to get UserPic: '+this.acknoldgmentMsg);
            }); 
  }
  
  
  
  ngOnInit() {  
   
  } 


  editProfile(userId: number){ 
    this.router.navigate(['/editprofile/'+userId]);
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => { 
      this.userpic = reader.result; 
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 } 
 
 prepareUpload(typeOfUpload: string) { 
  switch(typeOfUpload) { 

    case "userImage":  
      this.uploadChangedUserPic(this.userpic, 'userpic', this.currentUser.userId )
      break; 
    
  //  case "idproofImage":  
  //     this.uploadChangedUserPic( this.userpic, 'userpic', this.currentUser.userId )
  //     break;
 
    default: { 
      console.log("Invalid File uploading "); 
      break;              
   } 
  } 
  }


 uploadChangedUserPic(curFile: File, type: string, id : number){
  this.userService.uploadFile(curFile, type,  id).subscribe(
    res => {   
      console.log('SUCCESS:: Type :'+type+', File: '+curFile+':'+res);
    },
    err =>{
      console.log('FAILED:: Type :'+type+', File: '+curFile+': '+err);
    });
  }


  
  previewMyImage(event) {
    
    this.userpic = event.target.files[0];

    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        let url = event.target;
      }
    }
  }
  
  changePassword(){
    const dialogRef = this.dialog.open(ProfileChangepasswordComponent, {
      width: '40%',
      height: '50%',
      data: {
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  
}
