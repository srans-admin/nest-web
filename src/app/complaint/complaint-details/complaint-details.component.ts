import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../_models/complaint';
import { ComplaintService } from '../../_services/complaint.service';
// import { RoleListComponent } from '../role-list/role-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-complaint-details',
  templateUrl: './complaint-details.component.html',
  styleUrls: ['./complaint-details.component.css']
})
export class ComplaintDetailsComponent implements OnInit {

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

  list(){
    this.router.navigate(['complaint']);
  }

}
