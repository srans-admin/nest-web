import { Component, OnInit } from '@angular/core';
import { Guest } from '../../_models/guest';
import { GuestService } from '../../_services/guest.service';
import { GuestListComponent } from '../guest-list/guest-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guest-details',
  templateUrl: './guest-details.component.html',
  styleUrls: ['./guest-details.component.css']
})
export class GuestDetailsComponent implements OnInit {

  id: number;
  guest: Guest = new Guest();
  userpicImage: any;
  idproofImage: any;

  constructor(private route: ActivatedRoute,private router: Router,
    private guestService: GuestService) { }

  ngOnInit() {
    this.guest = new Guest();

    this.id = this.route.snapshot.params['id'];

    this.guestService.getGuest(this.id)
      .subscribe(data => {
        console.log(data)
        this.guest = data;
      }, error => console.log(error));

      //RetriveFile from Tenantpic	
      this.guestService.retriveFile('userpic',this.id)
        .subscribe(data => { 
          this.createImageFromBlob(data);
          //this.isImageLoading = false;
          this.userpicImage = data;
        }, error => { 
          //this.isImageLoading = false; 
          console.log(error);
        });
  

      //RetriveFile from IdproofImage
      this.guestService.retriveFile('idproofImage',this.id)
        .subscribe(data => { 
          this.createImageFromBlobidproofImage(data);
          //this.isImageLoading = false;
          this.idproofImage = data;
        }, error => {  
          console.log(error);
        });
  }

  //Guestpic Image
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
    this.router.navigate(['guest']);
  }

}
