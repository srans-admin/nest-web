import { Component, OnInit, HostListener } from '@angular/core';
import { GuestDetailsComponent } from './../guest-details/guest-details.component';
import { Observable } from "rxjs";
import { GuestService } from '../../_services/guest.service';
import { Guest, TmpGst } from "../../_models/guest";
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AlertMessage } from 'src/app/_alerts/alert.message';
import { NIDOSMessages } from 'src/app/_messages/message_eng';

@Component({
  selector: 'app-guest-list',
  templateUrl: './guest-list.component.html',
  styleUrls: ['./guest-list.component.css']
})
export class GuestListComponent implements OnInit {
  guests:  any;
  //userImages = new Map(); 
  userImages: Array<TmpGst> = [];
  acknoldgmentMsg : string = null;
  searchTerm: string;

  constructor(private guestService: GuestService,
    private router: Router,private matcheckbox: MatCheckboxModule, 
    private alertMessage: AlertMessage,
    private nIDOSMessages: NIDOSMessages,) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() { 

    this.guestService.getGuestsList().subscribe(res => { 
      this.guests = res; 
      this.guests.forEach(element => { 
        //for( let element of elements){
        this.guestService.retriveFile('userpic',  element.userId) 
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
      let usr = new TmpGst();
      usr.userId = userId;
      usr.pic = reader.result;
      this.userImages.push(usr);
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

 bringMyImage(userId){
  for(let guest of this.userImages){
  
    if(guest.userId == userId){
      return guest.pic;
    }

  }

 }

  deleteUser(id: number) {
    this.guestService.deleteGuest(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  guestDetails(id: number){
    this.router.navigate(['guestdetails', id]);
  }

  updateGuest(id: number){
    this.router.navigate(['guestupdate', id]);
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
