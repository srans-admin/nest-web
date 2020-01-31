import { UserDetailsComponent } from './../user-details/user-details.component';
import { Observable } from "rxjs";
import { UserService } from '../../_services/user.service';
import { User, TmpUsr } from "../../_models/user";
import { Component, OnInit, HostListener } from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';
// import {  MatFormField } from '@angular/material';
// import {MatSnackBar} from '@angular/material';
import { AuthenticationService } from 'src/app/_auth/auth.service';


@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  private users:  any;
  //userImages = new Map(); 
  private userImages: Array<TmpUsr> = [];
  private acknoldgmentMsg : string = null;
  private searchTerm: string;
  private currentUser: User;
  private type: string = 'GUEST';

  constructor(private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,private matcheckbox: MatCheckboxModule, 
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,
    private authenticationService: AuthenticationService
    // private formfield: MatFormField,
    // private snackBar:MatSnackBar
    ) { 
      this.currentUser = this.authenticationService.currentUser;
    }

  ngOnInit() {
    
    this.reloadData();
  }

  reloadData() {  
   //this.type = this.route.snapshot.params['type'];
   this.userService.getUsersList(this.type, this.currentUser.userId).subscribe(res => { 
      this.users = res; 
      this.users.forEach(element => { 
        //for( let element of elements){
        this.userService.retriveFile('userpic',  element.userId) 
          .subscribe(data => { 
              this.createImageFromBlob(element.userId, data); 
            },  
            err => {  
              this.acknoldgmentMsg = "Tenant Image Retrival failed ."+err;
              console.log(this.acknoldgmentMsg );  
            });
          //}
          });
          //console.log('this.userImages: '+this.userImages);

    },err =>{ 
        this.alertMessage.showHttpMessage(err);
    }); 
   
    
  } 

  createImageFromBlob(userId: any, image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => { 
      // this.userImages.set(userId,  reader.result);
      let usr = new TmpUsr();
      usr.userId = userId;
      usr.pic = reader.result;
      this.userImages.push(usr);
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 bringMyImage(userId){
  for(let user of this.userImages){
  
    if(user.userId == userId){
      return user.pic;
    }

  }

 }

  deleteUser(id: number) {

    if(window.confirm('Are you to delete?')){
      this.userService.deleteUser(id)
        .subscribe(
          data => {
            console.log(data);
            this.reloadData();
          },
          error => console.log(error));
      }
  }

  userDetails(id: number){
    this.router.navigate(['userdetails', id]);
  }

  updateUser(id: number){
    this.router.navigate(['userupdate', id]);
  }

  convertToTenant(userId: number){
    this.router.navigate(['../user/add',userId]);
  }
  

  changeLanguage(language: any) {
    var element = document.getElementById("url");                    
    // element.value = language;
    element.innerHTML = language;
}

showDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
@HostListener('document:click', ['$event'])
onclick = function(event) { 
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

payment(users : object){
// this.userService.getUser(users)
// .subscribe(
//   data => {
//     console.log(data);
//     this.reloadData();
//   },
//   error => console.log(error));
}

}


