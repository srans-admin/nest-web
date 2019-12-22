import { User } from '../../_models/user';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User = new User();
  userpicImage: any;
  idproofImage: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private userService: UserService) { }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));

      //RetriveFile from Tenantpic	
      this.userService.retriveFile('userpic',this.id)
        .subscribe(data => { 
          this.createImageFromBlob(data);
          //this.isImageLoading = false;
          this.userpicImage = data;
        }, error => { 
          //this.isImageLoading = false; 
          console.log(error);
        });
  

      //RetriveFile from IdproofImage
      this.userService.retriveFile('idproofImage',this.id)
        .subscribe(data => { 
          this.createImageFromBlobidproofImage(data);
          //this.isImageLoading = false;
          this.idproofImage = data;
        }, error => {  
          console.log(error);
        });
  }

  //Tenantpic Image
  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.userpicImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  //idproofpic Image
  createImageFromBlobidproofImage(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
       this.idproofImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  list(){
    this.router.navigate(['user']);
  }

}
