import { Management } from '../../_models/management';
import { Component, OnInit, Input } from '@angular/core';
import { ManagementService } from '../../_services/management.service';
import { ManagementListComponent } from '../management-list/management-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-management-details',
  templateUrl: './management-details.component.html',
  styleUrls: ['./management-details.component.css']
})
export class ManagementDetailsComponent implements OnInit {

  id: number;
  management: Management;

  constructor(private route: ActivatedRoute,private router: Router,
    private managementService: ManagementService) { }

  ngOnInit() {
    this.management = new Management();

    this.id = this.route.snapshot.params['id'];

    this.managementService.getManagement(this.id)
      .subscribe(data => {
        console.log(data)
        this.management = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['management']);
  }
}
