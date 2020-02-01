import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../_services/complaint.service';
import { Complaint } from '../../_models/complaint';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_auth/auth.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {
  private currentUser: User;
  private complaint: Complaint = new Complaint();
  private submitted = false; 

  constructor(private complaintService: ComplaintService,
    private authenticationService: AuthenticationService,
    private router: Router) {
     this.currentUser = this.authenticationService.currentUser;

   }

  ngOnInit() {
  }

  newComplaint(): void {
    this.submitted = false;
    this.complaint = new Complaint();
  }

  save() {
    this.complaint.userId = this.currentUser.userId;
    this.complaintService.createComplaint(this.complaint)
      .subscribe(data => console.log(data), error => console.log(error));
    this.complaint = new Complaint();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/complaint']);
  }

}
