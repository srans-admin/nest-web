import { UserDetailsComponent } from './../user-details/user-details.component';
import { Observable } from "rxjs";
import { UserService } from '../../_services/user.service';
import { User, TmpUsr } from "../../_models/user";
import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from '@angular/router';
import {MatCheckboxModule} from '@angular/material/checkbox';
// import {  MatFormField } from '@angular/material';
// import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users:  any;
  //userImages = new Map(); 
  userImages: Array<TmpUsr> = [];
  acknoldgmentMsg : string = null;

  constructor(private userService: UserService,
    private router: Router,private matcheckbox: MatCheckboxModule
    // private formfield: MatFormField,
    // private snackBar:MatSnackBar
    ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.users = this.userService.getUsersList();
   
    this.users.forEach(elements => { 
    for( let element of elements){
    this.userService.retriveFile('userpic',  element.userId) 
      .subscribe(data => {
       
          this.createImageFromBlob(element.userId, data);
         
        },  
        err => {  
          this.acknoldgmentMsg = "Tenant addition failed ."+err;
          console.log(this.acknoldgmentMsg );  
        });
      }
      }); 

      console.log('this.userImages: '+this.userImages);
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
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  userDetails(id: number){
    this.router.navigate(['userdetails', id]);
  }

  updateUser(id: number){
    this.router.navigate(['userupdate', id]);
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

}


