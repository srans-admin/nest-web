import { Component, OnInit } from '@angular/core';
import { Management } from '../../management';
import { ActivatedRoute, Router } from '@angular/router';
import { ManagementService } from '../../management.service';


@Component({
  selector: 'app-update-management',
  templateUrl: './update-management.component.html',
  styleUrls: ['./update-management.component.css']
})
export class UpdateManagementComponent implements OnInit {

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

  updateManagement() {
    this.managementService.updateManagement(this.id, this.management)
      .subscribe(data => console.log(data), error => console.log(error));
    this.management = new Management();
    this.gotoList();
  }

  onSubmit() {
    this.updateManagement();
  }

  gotoList() {
    this.router.navigate(['/management']);
  }
}

