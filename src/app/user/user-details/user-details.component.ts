import { User } from '../../_models/user';
import { Component, OnInit, Input, ElementRef ,ViewChild } from '@angular/core';
import { UserService } from '../../_services/user.service';
import { UserListComponent } from '../user-list/user-list.component';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../../_auth/auth.service';
import { HostelService } from '../../_services/hostel.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User = new User();
  userpicImage: any;
  idProofpicImage: any;
  private currentUser: User;

public printPage()
  {
      var data = document.getElementById('contentToConvert');
      html2canvas(data).then(canvas =>{
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jspdf('p', 'mm', 'a4');
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG',0, position, imgWidth,imgHeight)
      pdf.save('File.pdf');
    });
  }

  constructor(private route: ActivatedRoute,private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService) {
      this.currentUser = this.authenticationService.currentUser; 
      this.userService.getTenant(this.currentUser.userId)
      .subscribe(data => {
        console.log("hostel data " + data);
        this.user = data;
      }, error => console.log(error)); 
    }

  ngOnInit() {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log("user data "+ data);
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
      this.userService.retriveFile('idProofpic',this.id)
        .subscribe(data => { 
          this.createImageFromBlobidproofImage(data);
          //this.isImageLoading = false;
          this.idProofpicImage = data;
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
       this.idProofpicImage = reader.result;
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

  list(){
    this.router.navigate(['user']);
  }

}
