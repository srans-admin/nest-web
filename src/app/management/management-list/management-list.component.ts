import { ManagementDetailsComponent } from './../management-details/management-details.component';
import { Observable } from "rxjs";
import { ManagementService } from '../../management.service';
import { Management } from "../../management";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-management-list",
  templateUrl: "./management-list.component.html",
  styleUrls: ["./management-list.component.css"]
})
export class ManagementListComponent implements OnInit {
  managements: Observable<Management[]>;

  constructor(private managementService: ManagementService,
    private router: Router) {}


  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.managements = this.managementService.getManagementsList();
  }

  deleteManagement(id: number) {
    this.managementService.deleteManagement(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  managementDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updateManagement(id: number){
    this.router.navigate(['update', id]);
  }
}


