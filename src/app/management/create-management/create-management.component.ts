import { ManagementService } from '../../management.service';
import { Management } from '../../management';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-management',
  templateUrl: './create-management.component.html',
  styleUrls: ['./create-management.component.css']
})
export class CreateManagementComponent implements OnInit {

  constructor(private managementService: ManagementService,
    private router: Router) { }

      management: Management = new Management();
    submitted = false;


  ngOnInit() {
  }

  newManagement(): void {
    this.submitted = false;
    this.management = new Management();
  }

  save() {
    this.managementService.createManagement(this.management)
      .subscribe(data => console.log(data), error => console.log(error));
    this.management = new Management();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['/management']);
  }
}

