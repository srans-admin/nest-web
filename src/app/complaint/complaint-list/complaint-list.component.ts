import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ComplaintService } from '../../_services/complaint.service';
import { Complaint } from "../../_models/complaint";
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_auth/auth.service';
import { ComplaintWrapper } from "../../_models/complaint-wrapper";
import { UserService } from 'src/app/_services/user.service';
import { ComplaintComment } from 'src/app/_models/complaint-comment';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  private complaintWrappers; //: Observable<ComplaintWrapper[]>;
  private currentUser: User;

  constructor(private complaintService: ComplaintService,
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private router: Router) {
     this.currentUser = this.authenticationService.currentUser;
     this.reloadData();
     }

  ngOnInit() {

  }

  reloadData() {
     this.complaintService.getAllComplaintsForUser(this.currentUser.userId, this.currentUser.role).subscribe(
      res => { 
        this.complaintWrappers = res;
        let i = 0;
        for( i = 0; i < this.complaintWrappers.length ;i++){
          console.log('Set userpic for userid:'+this.complaintWrappers[i].complaint.userId);
          this.getUserPic( this.complaintWrappers[i].complaint);
          this.complaintWrappers[i].myComplaintComment = new ComplaintComment();
          this.complaintWrappers[i].myComplaintComment.complaintId = this.complaintWrappers[i].complaint.id;
          this.complaintWrappers[i].myComplaintComment.updatedByUserId =  this.currentUser.userId;
        }
      },err=>{
        console.log('Unable to retrive complaints data: '+err);
      }

    );
  }

  deleteComplaint(id: number) {
    this.complaintService.deleteComplaint(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  complaintDetails(id: number){
    this.router.navigate(['complaintdetails', id]);
  }

  updateComplaint(id: number){
    this.router.navigate(['complaintupdate', id]);
  }

  comment(complaintComment: ComplaintComment){ 
    complaintComment.enableMyReply = true;
  }

  submitComment(complaintComment: ComplaintComment){ 
    this.complaintService.createComplaintComment(complaintComment).subscribe(
      res => { 
        console.log('Comment added: '+res); 
      },err=>{
        console.log('Unable to save complaint comments data: '+err);
      } 
    ); 
    complaintComment.enableMyReply = false; 
  } 

  cancelComment(complaintComment: ComplaintComment){ 
    complaintComment.enableMyReply = false;
  }

  getUserPic(complaint: Complaint){

    this.userService.retriveFile('userpic',  complaint.userId) 
    .subscribe(data => { 
        this.createImageFromBlob(complaint, data); 
      },  
      err => {  
        console.log('User Pic retrival failed for user: '+complaint.userId);  
      });

  }

  createImageFromBlob(complaint: Complaint, image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {  
      complaint.userpic = reader.result; 
    }, false); 
    if (image) {
       reader.readAsDataURL(image);
    }
 }

}



