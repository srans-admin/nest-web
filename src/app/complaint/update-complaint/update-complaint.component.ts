import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../_models/complaint';
import { ActivatedRoute, Router } from '@angular/router';
import { ComplaintService } from '../../_services/complaint.service';


@Component({
  selector: 'app-update-complaint',
  templateUrl: './update-complaint.component.html',
  styleUrls: ['./update-complaint.component.css']
})
export class UpdateComplaintComponent implements OnInit {

  id: number;
  complaint: Complaint;

  constructor(private route: ActivatedRoute,private router: Router,
    private complaintService: ComplaintService) { }

  ngOnInit() {
    this.complaint = new Complaint();

    this.id = this.route.snapshot.params['id'];

    this.complaintService.getComplaint(this.id)
      .subscribe(data => {
        console.log(data)
        this.complaint = data;
      }, error => console.log(error));
  }

  updateComplaint() {
    this.complaintService.updateComplaint(this.id, this.complaint)
      .subscribe(data => console.log(data), error => console.log(error));
    this.complaint = new Complaint();
    this.gotoList();
  }

  onSubmit() {
    this.updateComplaint();
  }

  gotoList() {
    this.router.navigate(['/complaint']);
  }
  }


