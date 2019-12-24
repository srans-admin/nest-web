import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { ComplaintService } from '../../_services/complaint.service';
import { Complaint } from "../../_models/complaint";
import { Router } from '@angular/router';

@Component({
  selector: 'app-complaint-list',
  templateUrl: './complaint-list.component.html',
  styleUrls: ['./complaint-list.component.css']
})
export class ComplaintListComponent implements OnInit {
  complaints: Observable<Complaint[]>;

  constructor(private complaintService: ComplaintService,
    private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.complaints = this.complaintService.getComplaintList();
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
    this.router.navigate(['compaintdetails', id]);
  }

  updateComplaint(id: number){
    this.router.navigate(['complaintupdate', id]);
  }

}
