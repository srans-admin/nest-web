import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ComplaintService } from '../../_services/complaint.service';
import { Complaint } from "../../_models/complaint";
import { Router } from '@angular/router';
import { User } from '../../_models/user';
import { AuthenticationService } from '../../_auth/auth.service';
import { ComplaintWrapper } from "../../_models/complaint-wrapper";

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  complaintWrappers: Observable<ComplaintWrapper[]>;
  private currentUser: User;

  constructor(private complaintService: ComplaintService,
    private authenticationService: AuthenticationService,
    private router: Router) {
     this.currentUser = this.authenticationService.currentUser;
     this.reloadData();
     }

  ngOnInit() {

  }

  reloadData() {
    this.complaintWrappers = this.complaintService.getAllComplaintsForUser(this.currentUser.userId, this.currentUser.role);
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

  comment(){
    alert('Need to do');
  }
}



