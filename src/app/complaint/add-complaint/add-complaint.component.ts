import { Component, OnInit } from '@angular/core';
import { ComplaintService } from '../../_services/complaint.service';
import { Complaint } from '../../_models/complaint';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-complaint',
  templateUrl: './add-complaint.component.html',
  styleUrls: ['./add-complaint.component.css']
})
export class AddComplaintComponent implements OnInit {

  constructor(private complaintService: ComplaintService,
    private router: Router) { }

    complaint: Complaint = new Complaint();
    submitted = false;

  ngOnInit() {
  }

  newComplaint(): void {
    this.submitted = false;
    this.complaint = new Complaint();
  }

  save() {
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
